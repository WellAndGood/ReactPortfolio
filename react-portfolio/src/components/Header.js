import React from 'react';
import Navigation from '/Navigation.js'
import '../styles/Header.css';
import '../App.css';
import danResume from '/2021.06.Daniel.Pisani.Web.CV2.pdf'

function Header() {
    return (
        <section>
            <Navigation/>

            {/* <!-- Main section --> */}
        <div className="intro-container">
            <p data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="0">Hello,</p>
            <p data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="600">I'm DANIEL</p>
            <p data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1200">and I am a Full-Stack Web Developer</p>
            <p data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="2000">(and a Registered Dietitian)</p>
            <a href="#portfolio"><button class="portfolio-btn">Portfolio</button></a>
            <a href={danResume} download 
            target="_blank" 
            rel="nonreferrer"><button className="down-cv">Download CV</button></a>
        </div>
        <div className="cover-images">
            <img data-aos="zoom-in" 
            data-aos-duration="1000"
            src="images/danielmodelphoto.png" 
            id="daniel-cover" />
            <img src="images/codingbg.png" id="coding-cover" />
        </div>



        </section>

    )
}

export default Header;