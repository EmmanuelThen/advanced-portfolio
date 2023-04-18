import React from 'react';
import Title from './Title';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

{/* What are we expecting from the input form */}
type Inputs = { 
    name: string;
    email: string;
    subject: string;
    message: string;
};


type Props = {}

function ContactMe({}: Props) {

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:emmanuel.then@outlook.com?subject=${formData.subject}&body= ${formData.message} (${formData.email})`;
  };


  return (

    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <Title title='Contact Me'/>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Impressed with anything you saw? Lets get in <span className='text-[#4c8bf5]/80'>touch</span>.
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#4c8bf5]/80 w-7 h-7 animate-pulse' />
                    <p className='text-2xl'>123-456-7890</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#4c8bf5]/80 w-7 h-7 animate-pulse' />
                    <p className='text-2xl uppercase'>emmanuel.then@outlook.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#4c8bf5]/80 w-7 h-7 animate-pulse' />
                    <p className='text-2xl'>New York, NY</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text"  />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email"  />
                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />


                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button className='bg-[#4c8bf5]/80 py-5 px-10 rounded-md text-black font-bold hover:bg-[#4c8bf5]' type='submit'>Submit</button>

                </form>

            </div>
        </div>
    </div>

  )
}

export default ContactMe