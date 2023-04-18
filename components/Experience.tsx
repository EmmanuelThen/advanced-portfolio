import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Title from './Title';
import ExperienceCard from './ExperienceCard';
import Samsung from '../images/samsung-logo-300x300.png';
import BestBuy from '../images/best-buy.webp';
import Verizon from '../images/verizon-logoo.jpg'


type Props = {}

function Experience({}: Props) {
  return (

    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth'>
        <Title title='Experience'/>

        <div className='flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4c8bf5]/80'>
            <ExperienceCard image={Samsung} />
            <ExperienceCard image={BestBuy} />
            <ExperienceCard image={Verizon} />
            <ExperienceCard image={Samsung} />
        </div>

    </motion.div>

  )
}

export default Experience