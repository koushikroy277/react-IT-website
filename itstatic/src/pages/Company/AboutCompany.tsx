import React from 'react';
import { NavLink } from 'react-router-dom';
import './AboutCompany.scss';
import MereImg from '../../assets/techBox.jpg';
import {IoLogoSass, IoLogoReact, IoLogoNodejs} from 'react-icons/io5';
import {SiTypescript} from 'react-icons/si';
import { BsArrowLeft } from 'react-icons/bs';

const iconSize = 40;
function AboutCompany() {
    return (
        <>
            <div className="aboutBanner">
                <div className="aboutWrapper">
                    <div className="aboutDetail">
                        <h1>About Us</h1>
                        <div className="aboutBreadCrumb">
                            <NavLink to="/" className="breadLink">
                                <h2>Home</h2>
                            </NavLink>
                            <h2>/</h2>
                            <h2>
                                About
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offerParent">
                <div className="offerWrapper">
                    <div className="offerDetail">
                        <h2>// WHAT WE OFFER</h2>
                        <h1>Your Partner for
                        Software Innovation</h1>
                        <p>Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.
                        We can help to maintain and modernize your IT infrastructure and solve various                      infrastructure-specific issues a business may face.</p>
                    </div>
                    <div className="offerImg">
                        <div className="firstContainer">
                            <div className="imgItem">
                                <div className="itemWrapper">
                                    <h1>Our Mission</h1>
                                </div>
                            </div>
                            <div className="imgItem">
                                <div className="itemWrapper">
                                    <h1>Our Purpose</h1>
                                </div>
                            </div>
                        </div>
                        <div className="firstContainer">
                            <div className="imgItem">
                                <div className="itemWrapper">
                                    <h1>Our Strategy</h1>
                                </div>
                            </div>
                            <div className="imgItem">
                                <div className="itemWrapper">
                                    <h1>Our Vision</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="outcomeParent">
                <div className="outcomeWrapper">
                    <div className="outcomePic">
                        <div className="mereBg">
                            <img src={MereImg} alt="outcomeImg"
                            width="100%"
                            height="100%"/>
                        </div>
                    </div>
                    <div className="outcomeDetails">
                        <h2>// EXPERIENCE. EXECUTION. EXCELLENCE.</h2>
                        <h1>WHAT DO WE ACTUALLY DO</h1>
                        <div className="outcomeIconContainer">
                            <div className="outcomeIcon"><IoLogoSass size={iconSize}/></div>
                            <div className="outcomeIcon"><IoLogoReact size={iconSize}/></div>
                            <div className="outcomeIcon"><IoLogoNodejs size={iconSize}/></div>
                            <div className="outcomeIcon"><SiTypescript size={iconSize}/></div>
                        </div>
                        <h3>REACT.JS & NODE.JS Website Development Services</h3>
                        <div className="outcomePara">
                        <p>
                            Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.
                        </p>
                        </div>
                        <div className="learnBtn">
                            <BsArrowLeft size={30}/>
                            <h1>Learn More</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCompany
