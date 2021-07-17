import React, { useEffect } from 'react';
import '../styles/Project.css';
import '../App.css';
import Tilt from 'react-tilt'

const Project = () => {
    return (
        <div className="portfolio" id="portfolio">
            <div className="portfolio-text">
                <h2>Technical Skills</h2>
                <div className="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Vanilla Javascript</li>
                    <li>JQuery (though I hate it)</li>
                    <li>MySQL</li>
                    <li>ORM/Sequelize</li>
                    <li>Node.js / Express.js</li>
                    <li>HTML Routing</li>
                    <li>RESTful APIs</li>
                    <li>MongoDB/GraphQL</li>
                </div>
            </div>
            <h2>Recent Projects</h2>
            <div className="box-container">
                <Tilt options={{ max : 10, scale: 1.05 }}>
                    <div
                        className="box" id="box-1"
                        data-aos="fade-right"
                    >
                        <div className="image-box" id="image-box-1">
                        </div>
                        <div className="inner-box">
                            <span>1</span>
                            <h3 className="heading">Birdwatcher App (Quack)</h3>
                            <p className="details">A log-in portal to view/submit bird sightings and add bird profiles.</p>
                            <a href="https://github.com/WellAndGood/BirdWatcher-1" target="_blank">
                                Github
                            </a>
                            <br />
                            <a href="http://birdwatcherquack.herokuapp.com/" target="_blank">
                                Deployed Application
                            </a>
                        </div>
                    </div>
                </Tilt>
                <Tilt options={{ max : 10, scale: 1.05 }}>
                    <div
                        className="box" id="box-2"
                        data-aos="fade-left"
                    >
                        <div className="image-box" id="image-box-2">
                        </div>
                        <div className="inner-box">
                            <span>2</span>
                            <h3 className="heading">Vuze Musical</h3>
                            <p className="details">A music-based API to help you explore new instruments and tutorials.</p>
                            <a href="https://github.com/WellAndGood/BCS-Project-1" target="_blank">
                                Github
                            </a>
                            <br />
                            <a href="https://wellandgood.github.io/BCS-Project-1/" target="_blank">
                                Deployed Application
                            </a>
                        </div>
                    </div>
                </Tilt>
                <Tilt options={{ max : 10, scale: 1.05 }}>
                    <div
                        className="box" id="box-3"
                        data-aos="fade-right"
                    >
                        <div className="image-box" id="image-box-3">
                        </div>
                        <div className="inner-box">
                            <span>3</span>
                            <h3 className="heading">Password Generator</h3>
                            <p className="details">A Javascript-powered password generator, between 8 and 128 characters.</p>
                            <a href="https://github.com/WellAndGood/JavascriptPasswordGenerator" target="_blank">
                                Github
                            </a>
                            <br />
                            <a href="https://wellandgood.github.io/JavascriptPasswordGenerator/" target="_blank">
                                Deployed Application
                            </a>
                        </div>
                    </div>
                </Tilt>
                <Tilt options={{ max : 10, scale: 1.05 }}>
                    <div
                        className="box" id="box-4"
                        data-aos="fade-left"
                    >
                        <div className="image-box" id="image-box-4">
                        </div>
                        <div className="inner-box">
                            <span>4</span>
                            <h3 className="heading">Weather Network</h3>
                            <p className="details">With HTML/CSS/Javascript/APIs; A weather-based API to help you settle the weather and predicted forecasts in your city of choice.</p>
                            <a href="https://github.com/WellAndGood/DanielsWeatherNetwork" target="_blank">
                                Github
                            </a>
                            <br />
                            <a href="https://wellandgood.github.io/DanielsWeatherNetwork/" target="_blank">
                                Deployed Application
                            </a>
                        </div>
                    </div>
                </Tilt>
                <Tilt options={{ max : 10, scale: 1.05 }}>
                    <div
                        className="box" id="box-5"
                        data-aos="fade-right"
                    >
                        <div className="image-box" id="image-box-5" >
                        </div>
                        <div className="inner-box">
                            <span>5</span>
                            <h3 className="heading">Employee Tracker</h3>
                            <p className="details">With MySQL; A back-end application to add employees, categorize them into departments, and create/remove employees and departments.</p>
                            <a href="https://github.com/WellAndGood/EmployeeTrackerSQL" target="_blank">
                                Github
                            </a>
                        </div>
                    </div>
                </Tilt>
                <Tilt options={{ max : 10, scale: 1.05 }}>
                    <div
                        data-aos="fade-left"
                        className="box" id="box-6"
                    >
                        <div className="image-box" id="image-box-6">
                        </div>
                        <div className="inner-box">
                            <span>6</span>
                            <h3 className="heading">Front-End Team-Builder</h3>
                            <p className="details">With Node.js; A Node-powered command line application, which generates an HTML webpage.</p>
                            <a href="https://github.com/WellAndGood/Team-Profile-Generator" target="_blank">
                                Github
                            </a>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}

export default Project;