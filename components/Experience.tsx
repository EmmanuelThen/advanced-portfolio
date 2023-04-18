import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Title from './Title';
import ExperienceCard from './ExperienceCard';
import Samsung from '../images/samsung-logo-300x300.png';
import BestBuy from '../images/best-buy.webp';
import Coding from '../images/undraw_coding_re_iv62.svg';
import Investing from '../images/undraw_investing_re_bov7.svg';


type Props = {}

function Experience({}: Props) {
  return (

    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth'>
        
          <Title title='Experience'/>
        

        <div className='flex w-full space-x-5 overflow-x-scroll p-20 mt-20 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4c8bf5]/80'>

            <ExperienceCard 
            image={BestBuy} 
            points={['Managed the day-to-day operations of the mobile department in Best Buy such as overseeing sales goals, staffing, inventory management, customer service', 'Team development and product knowledge training for the mobile team.', 'Other key responsibilities were analyzing sales data, understanding the mobile industry and the products and services offered by Best Buy, and implementing strategies to improve department performance.']} 
            jobTitle={'Mobile Supervisor'} 
            company={'Best Buy'} 
            dates={'2016-2018'} />

            <ExperienceCard 
            image={Samsung} 
            points={['Responsible for diagnosing and repairing a range of issues with Samsung mobile devices, including smartphones and tablets.', 'Troubleshooting problems and recommending solutions to customers, as well as performing repairs such as screen replacements, battery replacements, and software updates.', 'Staying up-to-date on the latest trends and developments in mobile technology to provide the best possible service to customers.']} 
            jobTitle={'Repair Technician'} 
            company={'Samsung'} 
            dates={'2018-2020'} />

            <ExperienceCard 
            image={Investing} 
            points={['Conducting market research and analysis to identify potential investment opportunities.', 'Developing and executing property improvement plans to increase rental income and property value.', 'Staying up-to-date with real estate market trends and developments to enhance investment decisions and optimize my returns.', 'Conducting due diligence on prospective properties, including physical inspections, title searches, financial analysis etc.']} 
            jobTitle={'Real Estate Investing'} 
            company={'Self-Employed'} 
            dates={'2020-Current'} />

            <ExperienceCard 
            image={Coding} 
            points={['Started learning how to code, program, and implement best web development practices practices such as SEO through various online resources and friends/colleagues.', 'Designed and developed responsive websites and web applications using only HTML, CSS, and JavaScript in order to understand the raw fundamentals.', 'Later started working with web development frameworks and libraries such as React and Next.js to create dynamic and interactive web experiences.', 'Recently started my own freelancing web development site (Thenpixels.com) where I build, deploy, and maintain websites for clients such as local businesses, friends, or family etc.']} 
            jobTitle={'Self-Taught Front-End Development'} 
            company={'Self-Employed'} 
            dates={'2021-Current'} />
            
        </div>

    </motion.div>

  )
}

export default Experience