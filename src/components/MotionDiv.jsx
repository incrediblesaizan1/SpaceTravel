"use client"
import React from 'react'
import {motion} from "framer-motion"
import { FADE } from '@/lib/data'

const MotionDiv = ({children}) => {
  return (
    <motion.div initial="hidden" animate="visible" exit="exit" variants={FADE} key={Math.random().toString()}>
        {children}
    </motion.div>
  )
}

export default MotionDiv
