import React from 'react'
import myReads from '../static/myreads.png'
import { FiExternalLink } from 'react-icons/fi'

const MyReads = () => {
    return (
        <div className='project flex flex-col items-center'>
            <div className='w-10/12 '>
                <h1 className='text-white  pt-10 text-4xl font-bold'>MyReads</h1>
                <h1 className='text-gray-500  text-2xl font-bold'>A Library App</h1>

                <div className='flex flex-col  lg:flex-row pt-5 gap-5 '>
                    <img src={myReads} alt="" className='w-full lg:w-1/2 rounded-lg' />
                    <div className='flex flex-col justify-between gap-4'>
                        <div className='summary'>
                        <h1 className='text-white  text-3xl font-bold'>Summary:</h1>
                        <p className='text-gray-500  text-2xl font-bold'>This is a digital library where you can add books to diffrenet shelfs. all books came from Udacity API. It is a frontend application that uses React.js for the front-end and material UI for design. The application is hosted on vercel</p>
                        </div>

                        <div className='technologies-container '>
                        <h1 className='text-white  text-3xl font-bold pb-4'>Technologies:</h1>
                            <div className='technologies flex gap-4 flex-wrap'>
                                <img src={`https://skillicons.dev/icons?i=javascript`} alt="" className='w-12' />
                                <img src={`https://skillicons.dev/icons?i=react`} alt="" className='w-12' />
                                <img src={`https://skillicons.dev/icons?i=materialui`} alt="" className='w-12' />
                                <img src={`https://skillicons.dev/icons?i=vercel`} alt="" className='w-12' />
                            </div>
                        </div>
                    <div className='links flex gap-4'>
                            <a href="https://url-shortener-pi-seven.vercel.app/" target="_blank" rel="noreferrer" className='text-white  text-3xl font-bold'>Live Demo <FiExternalLink className='inline'/></a>
                            <a href="https://github.com/DevMarioNan/url-shortener " target="_blank" rel="noreferrer" className='text-white  text-3xl font-bold'>Github <FiExternalLink className='inline'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyReads