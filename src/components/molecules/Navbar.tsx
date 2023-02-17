import React from 'react'
import {Button} from "@/components/atoms/Button";
import Image from "next/image";



const navigation = [
  { name: 'Who', href: '#' },
  { name: 'What', href: '#' },
  { name: 'When', href: '#' },
  { name: 'Why', href: '#' },
]

export default function Navbar() {
  return (
    <header className="bg-ocean-600">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-ocean-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">Maker Standards</span>
              <Image className="h-10 w-auto" width={100} height={100} src="/logo.svg" alt="" />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-ocean-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Button color="sun" label="Get Notified" />
            {/*<Button color="sun" label="Sign in" />*/}
            {/*<Button label={`Sign up`} />*/}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-ocean-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
