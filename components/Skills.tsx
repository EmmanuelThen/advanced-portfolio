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
import Nextjs from '../images/next-js-logo.png'


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
            <Skill directionLeft={true} image={HTML} percentage='100%' />
            <Skill directionLeft={true} image={CSS} percentage='100%' />
            <Skill directionLeft={true} image={JavaScript} percentage='75%' />
            <Skill directionLeft={true} image={TypeScript} percentage='60%' />
            <Skill image={Node} percentage='30%' />
            <Skill image={Mocha} percentage= '40%' />
            <Skill image={Git} percentage='70%' />
            <Skill image={GitHub} percentage='100%' />
            <Skill directionLeft={true} image={Python} percentage='30%' />
            <Skill directionLeft={true} image={Tailwindlogo} percentage='80%' />
            <Skill directionLeft={true} image={Reactlogo} percentage='80%' />
            <Skill directionLeft={true} image={Bootstrap} percentage='80%' />
            <Skill image={Nextjs} percentage='50%' />
            
        </div>

    </motion.div>

  )
}

export default Skills