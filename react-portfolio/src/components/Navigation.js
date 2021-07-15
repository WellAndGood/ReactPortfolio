
import React from 'react';
import '../styles/Navigation.css';
import danResume from '2021.06.Daniel.Pisani.Web.CV2.pdf';

function Navigation() {
    return (
        <nav>
            <a href="#" className="lead-title" id="lead-title">Daniel Pisani</a>
            <ul>
                <li><a href="#lead-title" className="active">Home</a></li>
                <li><a href="#about-text">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a 
                // href={danResume} download target="_blank" rel="nonreferrer"
                >Resume</a></li>
                <li><a href="#contact-me">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;

