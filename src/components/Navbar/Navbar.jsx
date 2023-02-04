import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className="absolute top-7 w-full flex justify-center items-center ">
            <div className=" flex justify-between gap-10 text-white text-3xl md:text-5xl">
                <a href="https://github.com/DevMarioNan" target="_blank" ><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/marionan" target="_blank" ><AiFillLinkedin /></a>
                <a href="https://twitter.com/MarioNan13" target="_blank" ><AiOutlineTwitter /></a>
            </div>
        </div>
    )
}

export default Navbar