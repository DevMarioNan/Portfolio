import React from 'react'
import './FullPage.styling.css'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'

const FullPage = () => {
    return (
        <div className="FullPage-container      ">
                <AboutMe />
            <Skills />
            <div className="FullPage-section">
                <h1>Section 3</h1>
            </div>
            <div className="FullPage-section">
                <h1>Section 4</h1>
            </div>
        </div>
    )
}

export default FullPage