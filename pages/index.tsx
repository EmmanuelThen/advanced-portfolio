import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';



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
        <Projects />
      </section>


      
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      
    </div>

  )
}

export default Home;