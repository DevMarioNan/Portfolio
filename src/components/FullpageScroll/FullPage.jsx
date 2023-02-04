import React from 'react'
import './FullPage.styling.css'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'

const FullPage = () => {
    return (
        <div className="FullPage-container      ">
            <AboutMe />
            <Skills />
            <Projects />
            <div className="FullPage-section">
                <h1>Section 4</h1>
            </div>
        </div>
    )
}

export default FullPage