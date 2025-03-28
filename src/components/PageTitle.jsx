import React from 'react'


const PageTitle = ({title, number}) => {
  return (
    <div className='w-fit nav-text uppercase text-white md:text-[20px] md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px]'>
      <span className='inline-block font-bold opacity-25 mr-5'>
        0{number}
      </span>
      <span className='inline-block'>{title}</span>
    </div>
  )
}

export default PageTitle
