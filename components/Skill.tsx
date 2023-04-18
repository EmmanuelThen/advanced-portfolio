import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Ostrich from '../images/ostrich2.jpg'

type Props = {
    directionLeft?: boolean
    image: any
    percentage: string
}

function Skill({ directionLeft, image, percentage }: Props) {
  return (

    <div className='group relative flex cursor-pointer'>

        <motion.div
          initial={{ y: directionLeft ? -200 : 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image className='border-[#262626] rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:blur-sm transition duration-300 ease-in-out' src={image} alt="Prof Picture" />
        </motion.div>

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl font-bold text-black opacity-100'>{percentage}</p>
            </div>
        </div>

    </div>

  )
}

export default Skill