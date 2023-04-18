import React from 'react'
import Title from './Title';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Ostrich from '../images/ostrich2.jpg'

type Props = {}

function Projects({}: Props) {
    const projects = ['ThenPixels','Investment Analysis','Website Clone','Project','Project'];

  return (

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }} 
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <Title title='Projects' />

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#4c8bf5]/80'>
            {projects.map((project, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.div
                    initial={{ y: -300, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    >
                        <Image src={Ostrich} alt='' width={200} height={200} />
                    </motion.div>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='text-[#4c8bf5]/80'>Project {i + 1} of {projects.length}:</span> {project}
                        </h4>
                        
                        <div className='flex space-x-2 my-2 justify-center'>
                            <p className='flex justify-center items-center'>Technology Stack</p>
                            <Image className='w-10 h-10 rounded-full' src={Ostrich} alt='' />
                            <Image className='w-10 h-10 rounded-full' src={Ostrich} alt='' />
                            <Image className='w-10 h-10 rounded-full' src={Ostrich} alt='' />
                        </div>

                        <p className='text-lg text-center'>
                            ProjectProjectProjectProjectProjectProjectProjectProjectProject
                            ProjectProjectProjectProjectProjectProjectProjectProjectProject
                            ProjectProjectProjectProjectProjectProjectProjectProjectProjectProject
                            ProjectProjectProjectProjectProjectProjectProjectProject
                            ProjectProjectProjectProjectProjectProjectProjectProjectProject
                            ProjectProjectProjectProjectProjectProjectProjectProject
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#4c8bf5]/10 left-0 h-[500px] -skew-y-12' />

    </motion.div>

    

  )
}

export default Projects