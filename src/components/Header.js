import { useState, useRef, useEffect } from 'react'

import { navLinks } from '../constants/navlinks'

import logo from '../assets/img/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsMenuOpen(false)
        console.log('Outside Clicked. ')
      }
    }

    window.addEventListener('mousedown', handleOutSideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick)
    }
  }, [ref])

  return (
    <header class="bg-transparent top-0 z-50 absolute w-full">
      <nav class="flex items-center justify-between p-4">
        <div class="flex">
          <a href="#">
            <span class="sr-only">Cromzz</span>
            <img class="h-8 w-auto" src={logo} alt="Cromzz logo" />
          </a>
        </div>
        <div class="block md:hidden">
          <button class="relative group" onClick={() => setIsMenuOpen(true)}>
            <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-background-main ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                  <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                  <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>
          <div
            ref={ref}
            class={`${
              isMenuOpen ? 'flex flex-col' : 'hidden'
            } absolute top-20 right-4 left-2 w-full bg-background-main rounded-lg p-4`}
          >
            {navLinks.map(({ id, title }, index) => (
              <a
                href={`#${id}`}
                key={index}
                class="text-2xl font-bold text-right font-primary"
                onClick={(e) => {
                  e.preventDefault()
                  setIsMenuOpen(false)
                  document.getElementById(id).scrollIntoView({
                    behavior: 'smooth'
                  })
                }}
              >
                {title}
              </a>
            ))}
          </div>
        </div>
        <div class="hidden md:flex flex-1 justify-center gap-x-12 di">
          {navLinks.map(({ id, title }, index) => (
            <a
              href={`#${id}`}
              key={index}
              class="text-2xl font-bold  font-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(id).scrollIntoView({
                  behavior: 'smooth'
                })
              }}
            >
              {title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
