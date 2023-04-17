import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';



export default function Home() {
  return (

    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      

      {/*Header*/}
      <Header />


      {/*Hero*/}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/*About*/}


      {/*Experiences*/}

      
      {/*Skills*/}


      {/*Projects*/}


      {/*Contact Me*/}
      
    </div>

  )
}
