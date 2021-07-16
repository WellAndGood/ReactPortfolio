import React from 'react';
import '../styles/About.css';
import '../App.css';

function About() {
    const danResume = "#"
    return (
        <div className="about-container">
        {/* <!-- About text --> */}
            <div className="about-text" id="about-text">
                <h1>More About Me</h1>
                <h2>Full-Stack Developer and Health Professional</h2>
                <p>Greetings world! My name is Daniel (he/him). I'm a full-stack web developer, capable of building a wide
                    variety of applications. Each day, I strive to better understand how computers and the internet can help transform the world, especially the medical and political spheres.</p>
                <p>In addition to this, I'm a practicing Registered Dietitian, allowing me to bring years of clinical
                    experience in medical environments to my coding projects.</p>
                <a href="#portfolio"><button className="portfolio-btn">Portfolio</button></a>
                <a href="https://drive.google.com/file/d/1137nIzneFL4UsF02Z1Z01PfVstAuK7yi/view?usp=sharing" download 
                target="_blank" 
                rel="nonreferrer"><button className="down-cv">Download CV</button></a>
            </div>
        </div>
    )
}

export default About;