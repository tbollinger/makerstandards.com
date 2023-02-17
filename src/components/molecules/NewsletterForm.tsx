'use client';
import React, {SyntheticEvent, useEffect, useRef, useState} from 'react';
import {Button, ButtonInterface} from "@/components/atoms/Button";
import cn from "clsx";
import {useNewsletter} from "@/contexts/NewsletterContext";


const Subscribe = ({color = 'darling', label = 'Notify Me', size = 'xl'}: ButtonInterface) => {
  const {subscribed, subscribe} = useNewsletter();
  const inputElement = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState(`No spam, I promise. I'll make sure it's only 1 email a month tops and you'll have to opt into more.`)
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    if (subscribed) {
      setMessage('Thank you for subscribing! 🎉')
    }
    setLoaded(true)
  }, [subscribed])

  const submitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    if (inputElement.current) {
      subscribe(inputElement.current.value)
        .then((res) => {
          switch (res) {
            case 'success':
              setMessage('Thank you for subscribing! 🎉')
              break;
            case 'already subscribed':
              setMessage('You are already subscribed. Thank you! 🎉')
              break;
          }
        })
        .catch((err) => {
          console.log(err)
          setMessage('Something went wrong. Please try again.')
        })
    }
  }

  if (!loaded) {
    return (
      <div className="sm:flex sm:w-full sm:max-w-lg">
        <div className="min-w-0 flex-1">
          <div className="block bg-gray-50 h-full w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-darling-500 focus:ring-darling-500">
            &nbsp;
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-3">
          <div className={`px-5 py-3 sm:px-10 bg-gray-100 border-2 border-black rounded-md text-base font-semibold leading-7 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 inline-flex items-center`}>
            &nbsp;
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {!subscribed && (
        <form onSubmit={submitForm} className="sm:flex sm:w-full">
          <div className="min-w-0 flex-1">
            <label className="sr-only">Email address</label>
            <input name={`email`}
                   type={`email`}
                   ref={inputElement}
                   placeholder="you@awesome.com"
                   className="block h-full w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-darling-500 focus:ring-darling-500"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-3">
            <Button type={`submit`} label={label} color={color} size={size}/>
          </div>
        </form>
      )}
      <div
        className={cn(subscribed ? `block flex items-center justify-center bg-white h-full w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-darling-500 focus:ring-darling-500` : ``)}>
        {message}
      </div>
    </div>
  );
}

export default Subscribe