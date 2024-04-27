import React from 'react'
import { Logo } from './Logo'
import { Nav } from './Nav'

export const Header = () => {
  return (
    <header className='px-8 sticky flex bg-black top-0 z-[20] mx-auto flex-wrap w-full justify-between items-center'>
      <Logo />
      <Nav />
    </header>
  )
}
