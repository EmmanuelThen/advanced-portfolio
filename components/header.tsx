import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

function header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'> 

        <motion.div initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }} 
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center'>
            {/*social icons were getting from a component library*/}
            <SocialIcon url="https://github.com/EmmanuelThen" fgColor='#4c8bf5' bgColor='transparent' />
            <SocialIcon url="https://twitter.com/thenpixels" fgColor='#4c8bf5' bgColor='transparent' />
            <SocialIcon url="https://linkedin.com/in/emmanuel-then/" fgColor='#4c8bf5' bgColor='transparent' />
            
        </motion.div>

        <motion.div initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }} 
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }} 
        transition={{
            duration: 1.5
        }} 
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon className='curse-pointer' network='email' fgColor='#4c8bf5' bgColor='transparent' url='#contact' />
        <Link href='#contact'>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
        </Link>
        </motion.div>
        

    </header>
  )
}

export default header