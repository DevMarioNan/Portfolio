import React from 'react'
import './FullPage.styling.css'
import AboutMe from '../AboutMe/AboutMe'

const FullPage = () => {
    return (
        <div className="FullPage-container      ">
                <AboutMe />
            <div className="FullPage-section bg-black ">
                <h1>Section 2</h1>
            </div>
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