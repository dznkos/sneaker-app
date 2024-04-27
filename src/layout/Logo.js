import React from 'react'
import darkLogo from '../assets/img/dark_logo.png'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <div className='logo h-16 flex justify-center items-center'>
      <Link to="/">
        <img className='h-12 w-full' src={darkLogo} alt="logo" />
      </Link>
    </div>
  )
}
