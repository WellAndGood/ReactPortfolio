import React from 'react';
import '../styles/Navigation.css';
import '../App.css'

function Navigation() {
    const danResume = "#"
    return (
        <nav>
            <a href="#" className="lead-title" id="lead-title">Daniel Pisani</a>
            <ul>
                <li><a href="#lead-title" className="active">Home</a></li>
                <li><a href="#about-text">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="https://drive.google.com/file/d/1137nIzneFL4UsF02Z1Z01PfVstAuK7yi/view?usp=sharing" download target="_blank" rel="nonreferrer">Resume</a></li>
                <li><a href="#contact-me">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;

