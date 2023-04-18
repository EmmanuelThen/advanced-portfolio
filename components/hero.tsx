import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import AnimatedPicture from '../images/animated-picture.png';

type Props = {}

function hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ['Hello, My Name is Emmanuel Then', '<iEnjoyCoding />', '<iEnjoyCreating />', '<iEnjoyDesigning />'],
        loop: true,
        delaySpeed: 1000,
    });

  return (

    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        {/* Going to use an image component instead of img tag to optimize site performance */}
        <Image className='relative rounded-full mx-auto' src={AnimatedPicture} alt='animated picture' width={150} height={150} priority/>
        
        
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] '>Front-End Developer</h2>
            <h1 className='text-5xl lg:6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#4c8bf5' />
            </h1>

            <div className='pt-5 '>

                <Link href='#about'>
                    <button className='heroBtn'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroBtn'>Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroBtn'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroBtn'>Projects</button>
                </Link>
            </div>
        </div>
    </div>

  )
}

export default hero