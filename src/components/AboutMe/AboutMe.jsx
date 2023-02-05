import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useEffect, useState, useRef } from 'react';
import me from './me.png'
import Particles from './Particles';



const AboutMe = () => {
    const img = useRef(null);
    const [mousePos, setMousePos] = useState({});
    const [photo,setPhoto] = useState(null);
    

    useEffect(() => {
        

        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        img.current.style.left = mousePos.x +  -200 + 'px';
        img.current.style.top = mousePos.y + 20 + 'px';
        
        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
                );
            };
            
        }, [mousePos]);
        
        
        

    const handleHover = (e,x) => {
            img.current.style.width = '24rem';
            setPhoto(me);
    }
    const handleLeave = (e) => {
        setPhoto(undefined);
    }

    return (
        <div id="aboutme" className="overflow-hidden relative aboutme FullPage-section bg-black flex justify-center items-center">
            <Particles />
            <Navbar />

            <img ref={img} src={photo} alt="" className="w-96 absolute rounded-xl z-20"/>
            <div className="z-10">
                <h1 className="text-white text-lg md:text-4xl text-center ">
                    Hey, I'm <span
                        className="underline font-bold "
                        onMouseEnter={(e) => handleHover(e,true)}
                        onMouseLeave={(e) => handleLeave(e)}
                    >Mario Nan</span> , I'm a Front-End Engineer
                </h1>
                
            </div>
            
        </div>
    )
}

export default AboutMe