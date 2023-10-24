'use client'

import Lottie from "lottie-react"
import animationData from ".//assets/animation1.json"

import { Dialog } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Fantasy', href: '#' },
  { name: 'Novels', href: '#' },
  { name: 'Educational', href: '#' },
  { name: 'Adult 18+', href: '#' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  return (
    <div className='bg-white'>
      <header className='bg-header sticky top-0 z-50 w-full border-b bg-header/95 backdrop-blur supports-[backdrop-filter]:bg-header/60'>
        <nav
          className='flex items-center justify-between p-2 lg:px-8'
          aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>BookBuddyPro</span>
              <img
                className='h-12 w-auto'
                src='/images/logo3.png'
                alt='logo'
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
              <span className='sr-only'>Open main menu</span>
              <Menu className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-gray-900 hover:bg-pink-500 hover:text-white p-1 px-3 rounded-md'>
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a
              href='#'
              className='bg-slate-900 text-sm font-semibold leading-6 px-4 py-2 text-white rounded-md'>
              Log in <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>BookBuddyPro</span>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt=''
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}>
                <span className='sr-only'>Close menu</span>
                <X className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='relative isolate pt-14 bg-header'>
        
        <div className='py-12 sm:py-32 lg:pb-40'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className=' text-shadows text-red-900 font-extrabold text-2xl sm:text-2xl lg:text-6xl tracking-tight text-center dark:text-white'>
                Welcome to BookBuddyPro
              </h1>
              <p className="mt-4 font-extrabold text-2xl">Discover your next favorite book today!</p>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                BookBuddyPro is a small bookstore that specializes in fantasy and mystery
                books. Discover us in Bangalore or order online anytime.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Explore books
                </a>
                <a
                  href='#'
                  className='text-sm font-semibold leading-6 text-gray-900'>
                  Our mission <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
            <div className='mt-16 flow-root sm:mt-24'>
              <div className='relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <div className="flex h-screen items-center justify-center mt-4">
                    <div style={{ width: '500px', height: '550px' }}>
                      <Lottie animationData={animationData} />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold sm:text-2xl py-4 flex justify-center items-center">Whats included in the PRO plan</h2>
        <div className="text-center flex justify-center items-center space-y-6">

            <div className="flex flex-col md:flex-row gap-6 py-2 md:max-w-[64rem] md:py-12 lg:py-24">
         
              <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                  <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                    standard
                  </p>
                  <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                    <span className="mt-2 text-4xl">$</span>Free
                    <span className="self-end text-4xl">/mo</span>
                  </h1>
                </div>
                <div className="p-0">
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        5 team members
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        200+ components
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        40+ built-in pages
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        1 year free updates
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        Life time technical support
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 p-0">
                  <button
                    className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                  <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                    standard
                  </p>
                  <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                    <span className="mt-2 text-4xl">$</span>30
                    <span className="self-end text-4xl">/mo</span>
                  </h1>
                </div>
                <div className="p-0">
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        5 team members
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        200+ components
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        40+ built-in pages
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        1 year free updates
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        Life time technical support
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 p-0">
                  <button
                    className="block w-full select-none rounded-lg bg-slate-900 text-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase hover:bg-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                  <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                    standard
                  </p>
                  <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                    <span className="mt-2 text-4xl">$</span>60
                    <span className="self-end text-4xl">/mo</span>
                  </h1>
                </div>
                <div className="p-0">
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        5 team members
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        200+ components
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        40+ built-in pages
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        1 year free updates
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </span>
                      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        Life time technical support
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 p-0">
                  <button
                    className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
             


              </div>
        </div>


        <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-900/5 py-10">
              <p className="mt-5 text-center text-sm leading-6 text-slate-500">© 2023 TechnoTips Labs Inc. All rights reserved.</p>
              <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700"><a
                      href="/privacy-policy">Privacy policy</a>
                  <div className="h-4 w-px bg-slate-500/20"></div><a href="/changelog">Changelog</a>
              </div>
          </div>
      </footer>

        
       
      </div>
    </div>
  )
}
