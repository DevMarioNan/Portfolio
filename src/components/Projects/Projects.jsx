import React,{useEffect} from 'react'
import { FiExternalLink } from 'react-icons/fi'
import Line from './util/Line'

import URLShotener from './Projects/URLShotener'
import Cryptox from './Projects/Cryptox'
import MyReads from './Projects/MyReads'

import "aos/dist/aos.css";
import AOS from "aos";

const Projects = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset:120
        });
        AOS.refresh();
    }, []);

    return (
        <div className='FullPage-section bg-black flex flex-col items-center pb-10'>
            <h1 className='text-white text-center pt-10 text-3xl md:text-6xl font-bold' data-aos="fade" >PROJECTS</h1>
            <URLShotener />
            <Line />
            <Cryptox />
            <Line />
            <MyReads />
            <Line />

            <a href="https://github.com/DevMarioNan?tab=repositories" target="_blank" data-aos="fade-up">
                <h1 className='text-white text-center pt-10 text-lg md:text-2xl font-bold'>More Projects <FiExternalLink className='inline'/> </h1>
            </a>
        </div>
    )
}

export default Projects