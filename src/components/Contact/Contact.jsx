import React from 'react'
import {AiOutlineArrowUp } from 'react-icons/ai'
import Navbar from '../Navbar/Navbar'

const Contact = () => {
    return (
        <div className='FullPage-section bg-black flex flex-col justify-center items-center relative'>
            
            <Navbar />
            <AiOutlineArrowUp className='text-white text-4xl'/>
            <h1 className='text-lg md:text-4xl text-white font-bold pt-10'>Reach me through social media</h1>
            <h1 className='text-2xl text-gray-500 py-10'>OR</h1>

            <h1 className='text-lg md:text-4xl text-white font-bold my-5'>Write me an e-mail at:</h1>
                <h1 className='text-2xl md:text-5xl  text-stone-400 font-bold  break-all'>
                dev.mario.nan@gmail.com 
                </h1>
            <footer className='absolute bottom-0 '>
                <h1 className='text-lg md:text-2xl text-gray-500 py-10'>© 2023 Mario Nan</h1>
            </footer>
        </div>
    )
}

export default Contact