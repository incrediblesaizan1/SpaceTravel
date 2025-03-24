"use client"
import Image from 'next/image'
import React from 'react'

const Background = ({mobile, tablet, desktop}) => {
  return (
    <div className='fixed z-0 h-screen w-screen top-0 left-0'>
      <picture>
        <source media='(min-width:1024px)' srcSet={desktop} />
        <source media='(min-width:768px)' srcSet={tablet} />
        <Image src={mobile} className='object-cover' fill alt='Background'  />
      </picture>
    </div>
  )
}

export default Background
