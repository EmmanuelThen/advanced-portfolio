import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Ostrich from '../images/ostrich2.jpg';






type Props = {
  image: any;
  points: string[];
  jobTitle: string
  company: string
  dates: string
}

function ExperienceCard({image, points, jobTitle, company, dates}: Props) {
  return (
                        
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-20 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        >
          <Image className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src={image} alt='' />
        </motion.div>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{company}</p>
            <p className='uppercase py-5 text-gray-300'>{dates}</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                {points.map((point) => (
                  <li key={point}>{point}</li>
              ))}
            </ul>
        </div>

    </article>

  )
}

export default ExperienceCard