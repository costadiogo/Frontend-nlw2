import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

//import images
import logoImg from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';

//import Icons
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';



function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="content">
                <div className="logo-container">
                    <img src={logoImg} alt="proffy"/>
                    <h2>Your online study platform</h2>
                </div>

                <img src={landing} alt="Study Platform" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Study"/>
                        Study
                    </Link>

                    <Link to="give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Study"/>
                        Teach classes
                    </Link>
                </div>

                <span className="total-connections">
                    Total n connections already made <img src={purpleHeartIcon} alt="Purple Heart"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;