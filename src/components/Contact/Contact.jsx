import React from 'react'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'

const Contact = () => {
    return (
        <div className='FullPage-section bg-black flex flex-col justify-center items-center relative'>
            <h1 className='text-white text-3xl md:text-6xl font-bold text-center absolute top-10'>CONTACT ME</h1>
            <div className=" flex justify-between gap-10 text-white text-5xl md:text-7xl">
                <a href="https://github.com/DevMarioNan" target="_blank" ><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/marionan" target="_blank" ><AiFillLinkedin /></a>
                <a href="https://twitter.com/MarioNan13" target="_blank" ><AiOutlineTwitter /></a>
                <a href="mailto:dev.mario.nan@gmail.com" target="_blank" ><HiMail /></a>
            </div>
            <footer className='absolute bottom-0 '>
                <h1 className='text-lg md:text-2xl text-gray-500 py-10'>© 2023 Mario Nan</h1>
            </footer>
        </div>
    )
}

export default Contact