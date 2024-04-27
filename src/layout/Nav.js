import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div className='flex items-center w-full gap-10'>
      <NavLink to="/" >Home</NavLink>
      {/* <NavLink to="/man" >Man</NavLink>
      <NavLink to="/woman" >Woman</NavLink> */}
      <NavLink to="/products" >Products</NavLink>
      <NavLink to="/about" >About</NavLink>
    </div>
  )
}

export const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleNavBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className='flex flex-[1] items-center justify-end overflow-hidden text-white'>
        <div className="hidden md:flex gap-5 pe-5 ps-10 w-full">
          <NavLinks />
          <div className="flex gap-3">
            {/* <!--Search--> */}

            {/* --Shopping Cart-- */}
            <button className="cart relative">
              <span id="count-prod" className="absolute px-1 left-3 -top-0 bg-red-500 text-xs rounded-full">0</span>
              <i className="ri-shopping-cart-2-fill"></i>
            </button>

            {/* <!--Theme--> */}
            <button className="theme">
              {/* <!--Dark--> */}
              <i className="ri-moon-fill"></i>
              {/* <!--Light--> */}
              {/* <!--<i class="ri-sun-fill"></i>--> */}
            </button>
            <button id="buttonlogin" className="user" >
              {/* <!-- <Link to="./pages/loginPage/login.html"></a> --> */}
              <i className="ri-user-fill"></i>
            </button>
          </div>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleNavBar}>
            {isOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
          </button>
        </div>
      </nav>
      {isOpen &&
        (
          <div className='flex basis-full flex-col gap-3 items-center text-white pb-4'>
            <NavLink to="/" >Home</NavLink>
            {/* <NavLink to="/man" >Man</NavLink>
            <NavLink to="/woman" >Woman</NavLink> */}
            <NavLink to="/products" >Products</NavLink>
            <NavLink to="/about" >About</NavLink>
          </div>
        )}
    </>
  )
}
