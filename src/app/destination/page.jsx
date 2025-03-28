"use client"
import Background from '@/components/Background'
import MotionDiv from '@/components/MotionDiv'
import {AnimatePresence, motion} from "framer-motion"
import React, { useMemo, useState } from 'react'
import mobile from "@/assets/destination/background-destination-mobile.jpg"
import tablet from "@/assets/destination/background-destination-tablet.jpg"
import desktop from "@/assets/destination/background-destination-desktop.jpg"
import PageTitle from '@/components/PageTitle'
import { SLIDE_LEFT, SLIDE_RIGHT } from '@/lib/data'
import europa from "@/assets/destination/image-europa.png";
import mars from "@/assets/destination/image-mars.png";
import moon from "@/assets/destination/image-moon.png";
import titan from "@/assets/destination/image-titan.png";
import { usePrevious } from '@mantine/hooks'
import Image from 'next/image'


const planets = [
  {
    name: "Moon",
    image: moon,
    distance: "384,400 km",
    time: "3 days",
    description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
  },
  {
    name: "Mars",
    image: mars,
    distance: "225,000 km",
    time: "9 months",
    description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
  },
  {
    name: "Europa",
    image: europa,
    distance: "628,000 km",
    time: "3 years",
    description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
  },
  {
    name: "Titan",
    image: titan,
    distance: "1,600,000 km",
    time: "7 years",
    description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
  },
];


const page = () => {

  const [actual, setActual] = useState(0)
  const previous = usePrevious(actual)

  const planet = useMemo(()=>planets[actual], [actual])

  const variant = useMemo(()=>{
    if(previous === undefined) return SLIDE_LEFT
    if(actual > previous) return SLIDE_LEFT
    SLIDE_RIGHT
  },[actual, previous])

  return (
    <MotionDiv>
      <Background mobile={mobile.src} tablet={tablet.src} desktop={desktop.src} />

      <main className='relative z-10 p-6 md:px-24 md:pb-0'>
    <PageTitle number={1} title='Pick Your destination' />

        <motion.div variants={SLIDE_LEFT} className='w-fit mx-auto mb-8 md:mx-0 md:-ml-10'>
</motion.div>

    <div className='grid gap-40 lg:grid-cols-2 lg:pt-12'>
    <AnimatePresence>
      <motion.div key={planet.name} variants={variant} className='flex justify-center my-6'>
    <Image className='w-60 md:w-80 lg:w-[440px] aspect-square' src={planet.image} alt={`planet ${planet.name}`} />
      </motion.div>
    </AnimatePresence>

    <div>
      <div className='flex items-center justify-center text-[#D0D6F9] space-x-6 nav-text md:text-[16px] lg:justify-start'>
    {
      planets.map(({name}, index)=>(
        <div key={name} onClick={()=> setActual(index)} className={`relative py-2 border-b-2 border-transparent cursor-pointer transition [&:not(.active)]:hover:border-current [&.active]:text-white ${!index && "active"}`}>
          {name}
          {
            planet.name === name && (
              <motion.span layoutId='planetUnderline' className='absolute bottom-0 left-0 w-full h-1 bg-white'>

              </motion.span>
            )
          }
        </div>
      ))
    }
      </div>

      <div className='text-[#D0D6F9] text-center  lg:text-left'>
    <h3 className='mt-5 uppercase text-white lg:text-[100px]'>
    {planets[actual].name}
    </h3>
    <p className='leading-relaxed lg:text-[18px]'>
      {" "}
    {planets[actual].description}{" "}
    </p>
    <hr className='my-8 border-[#D0D6F9]/25' />

    <div className='grid md:grid-cols-2 gap-8'>
    <div className='w-fit mx-auto uppercase lg:mx-0'>
    <span className='block sub-2'>
    avg. distance
    </span>
    <span className='block sub-1 text-white'>
    {" "}
    {planets[actual].distance}{" "}
    </span>
      </div>
      <div className='w-fit mx-auto uppercase lg:mx-0'>
    <span className='block sub-2'>
    est. travel time
    </span>
    <span className='block sub-1 text-white'>
    {" "}
    {planets[actual].time}{" "}
    </span>
      </div>
    </div>

      </div>

    </div>

    </div>

      </main>
    </MotionDiv>
  )
}

export default page
