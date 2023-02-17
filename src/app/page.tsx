import {ChevronRightIcon} from '@heroicons/react/20/solid'
import Footer from "@/components/molecules/Footer";
import Image from "next/image";
import NewsletterForm from "@/components/molecules/NewsletterForm";

const stats = [
  {label: 'Meters Extruded', value: '0'},
  {label: 'Employees', value: '1'},
  {label: 'Beta Users', value: '0'},
  {label: 'Raised', value: '$0'},
]

export default function Example() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div>
              <div>
                <Image
                  width={100}
                  height={100}
                  className="h-11 w-auto"
                  src="/logo.svg"
                  alt="Maker Standards"
                />
              </div>
              <div className="mt-20">
                <div>
                  <span className="inline-flex space-x-4">
                    <span className="rounded bg-darling-50 px-2.5 py-1 text-sm font-semibold text-darling-500">
                      What&apos;s new
                    </span>
                    <span className="inline-flex items-center space-x-1 text-sm font-medium text-darling-500">
                      <span>Filament 1.75mm</span>
                      <ChevronRightIcon className="h-5 w-5" aria-hidden="true"/>
                    </span>
                  </span>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Made for Makers
                  </h1>
                  <p className="mt-6 text-xl text-gray-500">
                    Sick of bulk ordering the cheapest price filament, praying that it doesn&apos;t suck?
                    We are too.
                    That&apos;s why we&apos;re creating a filament subscription service that delivers consistent results at a low, low price point.
                  </p>
                </div>
                <div className={`mt-12`}>{}</div>
                <NewsletterForm label={`Notify me`} color={`darling`} />
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full"/>
                <svg className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0" width={404} height={392} fill="none" viewBox="0 0 404 392">
                  <defs>
                    <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"/>
                </svg>
              </div>
              <div className="relative -mr-40 pl-6 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                <Image width={2400} height={1600} className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none" src="/osman-talha-dikyar-1MZ9JjAXg1E-unsplash.jpg" alt="Filament spool on top of a 3D Printer"/>
                <span className={`text-xs text-gray-400`}>Photo by <a href="https://unsplash.com/@osmantalha?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Osman Talha Dikyar</a> on <a href="https://unsplash.com/photos/1MZ9JjAXg1E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial/stats section */}
        <div className="relative mt-20">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
            <div className="relative sm:py-16 lg:py-0">
              <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"/>
                <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width={404} height={392} fill="none" viewBox="0 0 404 392">
                  <defs>
                    <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"/>
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">

                {/* Testimonial card*/}
                <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                  <Image width={5421} height={3614} className="absolute inset-0 h-full w-full object-cover" src="/jean-philippe-delberghe-zxX1iPFhcac-unsplash.jpg" alt="Industrial equipment extruding wires"/>
                  <div className="absolute inset-0 bg-sun-500 mix-blend-multiply"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-sun-600 via-sun-600 opacity-90"/>
                  <div className="relative px-8">
                    <div className={`flex`}>
                      <Image width={100} height={100} className="h-12 pr-2" src="/logo.svg" alt="Maker Standards logo"/>
                      <div className={`h-12 flex items-end text-lg font-mono text-white`}>mk::std</div>
                    </div>
                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg className="absolute -top-4 -left-3 h-8 w-8 -translate-x-3 -translate-y-2 transform text-sun-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                        </svg>
                        <p className="relative">
                          I got sick of searching out the best filament deals on the internet, so I made a tool to help me find them.
                          Then I made a tool to help me make them. I&apos;m a maker at heart, so I wanted to make a product for other makers.
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-sun-200">Trenton Bollinger, Owner &amp;&amp; Operator</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <span className={`text-xs text-gray-300`}>Photo by <a href="https://unsplash.com/@jipy32?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jean-Philippe Delberghe</a> on <a href="https://unsplash.com/photos/zxX1iPFhcac?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>

              </div>
            </div>

            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
              {/* Content area */}
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Good, cheap filament shouldn&apos;t be hard to find.
                </h2>
                <div className="mt-6 space-y-6 text-gray-500">
                  <p className="text-lg">
                    Filament should be easy to find, easy to buy, and easy to use. We&apos;re here to make that happen.
                  </p>
                  <p className="text-base leading-7">
                    You shouldn&apos;t have to spend hours searching for the best deals, comparing Amazon to Aliexpress,
                    ending up ordering it from some sketchy website, and then waiting a MONTH for it NOT to arrive.
                    Filament should be: Consistent, Reliable, Affordable, Easy to use, and Knot Free.
                    My mission is to make filament that satisfies all of those things, in that order.
                  </p>
                </div>
              </div>

              {/* Stats section */}
              <div className="mt-10">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                      <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                      <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                {/*<div className="mt-10">*/}
                {/*  <a href="#" className="text-base font-medium text-ocean-500">*/}
                {/*    Learn more about how we&apos;re changing the world &rarr;*/}
                {/*  </a>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative mt-24 sm:mt-32 sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50"/>
            <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"/>
            </svg>
          </div>
          <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-grass-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
              <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-grass-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-grass-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Get notified when we&rsquo;re launching.
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-lg text-white">
                    We&apos;re working hard to get ready for launch.
                    Enter your email below to be notified when we&apos;re up and running.
                  </p>
                  <div className={`mt-12 flex justify-center items-center`}>
                    <NewsletterForm label={`Notify me`} color={`sun`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  )
}
