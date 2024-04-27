import React, { useState } from 'react'

import { navLinks } from '../constants/navlinks'

import logo from '../assets/img/logo.png'
import menu from '../assets/svg/menu.svg'
import close from '../assets/svg/close.svg'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`w-full flex items-center sm:px-16 px-6 py-5 fixed top-0 z-20 bg-background-main`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />

        <ul className="flex-1 justify-center list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(({ id, title }, index) => (
            <li key={`nav_link_${index}`}>
              <a
                href={`#${id}`}
                className={`
                ${active === title ? 'text-white' : 'text-secondary'}
                hover:text-white text-2xl font-bold text-right font-primary cursor-pointer
              `}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(id).scrollIntoView({
                    behavior: 'smooth'
                  })
                  setActive(title)
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 justify-end items-center sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-background-main absolute top-20 w-[95%] right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(({ id, title }, index) => (
                <li key={`nav_link_${index}`}>
                  <a
                    href={`#${id}`}
                    className={`
                ${active === title ? 'text-white' : 'font-primary'}
                text-2xl font-bold text-right font-primary cursor-pointer text-[16px]
              `}
                    onClick={(e) => {
                      setToggle(!toggle)
                      e.preventDefault()
                      document.getElementById(id).scrollIntoView({
                        behavior: 'smooth'
                      })
                      setActive(title)
                    }}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
