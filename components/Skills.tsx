import React from 'react'
import Title from './Title';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Skill from './Skill';
import Bootstrap from '../images/bootstrap.svg';
import CSS from '../images/css3.svg'
import Git from '../images/git.svg'
import GitHub from '../images/github.svg'
import HTML from '../images/html5.svg'
import JavaScript from '../images/javascript.svg'
import Mocha from '../images/mocha.svg'
import Node from '../images/node-js.svg'
import Python from '../images/python.svg'
import Reactlogo from '../images/react.svg'
import Tailwindlogo from '../images/tailwind-css.svg'
import TypeScript from '../images/typescript.svg'


type Props = {}

function Skills({}: Props) {
  return (

    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl-px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center '>
        <Title title='Skills' />

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>

        <div className='grid grid-cols-4 gap-5'>
            <Skill directionLeft={true} image={HTML} />
            <Skill directionLeft={true} image={CSS} />
            <Skill directionLeft={true} image={JavaScript} />
            <Skill directionLeft={true} image={TypeScript} />
            <Skill image={Node} />
            <Skill image={Mocha} />
            <Skill image={Git} />
            <Skill image={GitHub} />
            <Skill directionLeft={true} image={Python} />
            <Skill directionLeft={true} image={Tailwindlogo} />
            <Skill directionLeft={true} image={Reactlogo} />
            <Skill directionLeft={true} image={Bootstrap} />
            
        </div>

    </motion.div>

  )
}

export default Skills