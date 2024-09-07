import React from 'react'
import { LOGO_URL } from '../constants'

function Header() {
  return (
    <div className='absolute flex flex-col px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img className='w-44'
        src={LOGO_URL} alt='Logo' />
    </div>
  )
}

export default Header