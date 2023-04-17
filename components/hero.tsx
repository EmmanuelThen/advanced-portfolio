import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ['Hi, My name is Emmanuel Then', '<iEnjoyCoding />', '<iEnjoyCreating />', '<iEnjoyDesigning />' ],
        loop: true,
        delaySpeed: 1000,
    });

  return (

    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img src="" alt="" />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#4c8bf5' />
        </h1>
    </div>

  )
}

export default hero