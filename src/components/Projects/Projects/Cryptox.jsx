import React,{useEffect} from 'react'
import cryptox from '../static/cryptox.png'
import { FiExternalLink } from 'react-icons/fi'
import "aos/dist/aos.css";
import AOS from "aos";

const Cryptox = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset:120
        });
        AOS.refresh();
    }, []);

    return (
        <div className='project flex flex-col items-center overflow-x-hidden' >
            <div className='w-10/12 '>
                <h1 className='text-white  pt-10 text-2xl md:text-4xl font-bold overflow-x-hidden' data-aos="fade-right">Cryptox</h1>
                <h1 className='text-gray-500 text-lg md:text-2xl font-bold overflow-x-hidden' data-aos="fade-right">Cryptocurrency stats site</h1>
                <div className='flex flex-col  lg:flex-row pt-5 gap-5'>
                    <img src={cryptox} alt="" className=' w-full lg:w-1/2 rounded-lg overflow-x-hidden' data-aos="fade"/>
                    <div className='flex flex-col justify-between gap-4'>
                        <div className='summary'>
                            <h1 className='text-white text-xl md:text-3xl font-bold overflow-x-hidden' data-aos="fade-left">Summary:</h1>
                            <p className='text-gray-500 text-lg md:text-2xl font-bold overflow-x-hidden' data-aos="fade-left"> This is a Cryptocurrency stats site. It is a frontend application that uses React.js for the front-end with redux/toolkit. The application is hosted on vercel.</p>
                        </div>

                        <div className='technologies-container'>
                            <h1 className='text-white text-xl md:text-3xl font-bold pb-4 overflow-x-hidden' data-aos="fade-left">Technologies:</h1>
                            <div className='technologies flex gap-4 flex-wrap'>
                                <img src={`https://skillicons.dev/icons?i=javascript`} alt="" className='w-12 overflow-x-hidden'  data-aos="fade-left"/>
                                <img src={`https://skillicons.dev/icons?i=react`} alt="" className='w-12 overflow-x-hidden'  data-aos="fade-left"/>
                                <img src={`https://skillicons.dev/icons?i=redux`} alt="" className='w-12 overflow-x-hidden'  data-aos="fade-left"/>
                                <img src={`https://skillicons.dev/icons?i=materialui`} alt="" className='w-12 overflow-x-hidden'  data-aos="fade-left"/>
                                <img src={`https://skillicons.dev/icons?i=vercel`} alt="" className='w-12 overflow-x-hidden'  data-aos="fade-left"/>
                            </div>
                        </div>
                        <div className='links flex gap-4' data-aos="fade-left">
                            <a href="https://cryptox-sigma.vercel.app" target="_blank" rel="noreferrer" className='text-white text-xl md:text-3xl font-bold overflow-x-hidden' data-aos="fade-left">Live Demo <FiExternalLink className='inline' /></a>
                            <a href="https://github.com/DevMarioNan/cryptox" target="_blank" rel="noreferrer" className='text-white text-xl md:text-3xl font-bold overflow-x-hidden' data-aos="fade-left">Github <FiExternalLink className='inline' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cryptox