import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import HTML from '../images/html5.svg';
import CSS from '../images/css3.svg';
import JavaScript from '../images/javascript.svg';
import Coding from '../images/undraw_coding_re_iv62.svg';
import Reactlogo from '../images/react.svg';
import TypeScript from '../images/typescript.svg'




const Home: NextPage = () => {
  return (

    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4c8bf5]/80'>
      <Head>
        <title>Emmanuel's Portfolio</title>
      </Head>

      
      <Header />


      
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      
      <section id='about' className='snap-center'>
        <About />
      </section>

      
      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      
      
      <section id='skills' className='snap-start'>
        <Skills />
      </section>


      
      <section id='projects' className='snap-start'>
        <Projects projectImg={Coding} tech1={HTML} tech2={CSS} tech3={TypeScript} tech4={Reactlogo} />
      </section>


      
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      
    </div>

  )
}

export default Home;