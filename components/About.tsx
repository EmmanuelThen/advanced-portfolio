import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Ostrich from '../images/ostrich2.jpg'
import Me from '../images/about-me-photo.jpg'


type Props = {}



function About({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center' >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2}}
        >
          <Image className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' src={Me} alt="Prof Picture" />
        </motion.div>

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='text-[#4c8bf5]/80'>little</span>  background</h4>
            <p className="text-base">
            I am a self-taught front-end developer based in New York City with a background in finance, real estate, and customer relations.
            I've decided to make a career change into tech!
            I studied at BMCC BOUROUGH OF MANHATTAN CC and later transferred to BARUCH COLLEGE where I studied finance. 
            Although I learned a lot while pursuing a career in finance, I felt like something was missing. 
            I later realized that finance wasnt really pushing me to my full creative potential, neither was it giving me that innovative pleasure.
            </p>
        </div>
      
    </motion.div>
  )
}

export default About;
