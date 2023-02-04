import React from 'react'
import './FullPage.styling.css'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

const FullPage = () => {
    return (
        <div className="FullPage-container      ">
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default FullPage