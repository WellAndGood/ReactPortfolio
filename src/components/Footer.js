import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (

    <footer>
        <div className="social-icons">
            <a href="https://github.com/WellAndGood" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="mailto:danielpisani12@hotmail.com" target="_blank" rel="noreferrer">
            <i className="fas fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/danielpisani/" target="_blank" rel="noreferrer"><i
                    className="fab fa-linkedin"></i></a>
        </div>

        <p>Copyright by Daniel Inc.</p>
        <div className="a-social-bar">
            <a href="https://github.com/WellAndGood" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="mailto:danielpisani12@hotmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/danielpisani/" target="_blank" rel="noreferrer"><i
            className="fab fa-linkedin"></i></a>
        </div>
    </footer>
    )
}

export default Footer