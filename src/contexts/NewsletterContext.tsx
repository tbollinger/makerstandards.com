'use client';
import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface NewsLetterContext {
  subscribed: boolean;
  subscribe: (email: string) => Promise<string>;
}

// @ts-ignore
const NewsletterContext = createContext<NewsLetterContext>();

function getInitialState() {
  const subscribed = localStorage.getItem('subscribedToNewsletter')
  return subscribed ? JSON.parse(subscribed) : false;
}

const NewsletterProvider = ({children}: {children: ReactNode}) => {
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSubscribed(getInitialState())
    }
  }, [])

  const subscribe = async (email: string) => {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({email}),
    })
    const {error} = await res.json()
    if (error) {
      return error;
    }
    await localStorage.setItem('subscribedToNewsletter', JSON.stringify(true))
    setSubscribed(true)
    return 'success'
  }

  return (
    <NewsletterContext.Provider value={{subscribed, subscribe}}>
      {children}
    </NewsletterContext.Provider>
  )
}

function useNewsletter() {
  const context = useContext(NewsletterContext)
  if (context === undefined) {
    throw new Error('useNewsletter must be used within a NewsletterProvider')
  }
  return context
}

export {NewsletterProvider, useNewsletter}
