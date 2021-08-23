import React from 'react';
import './ModelShow.scss';
import model from '../../assets/model.jpg';
import model2 from '../../assets/model2.jpg';
import model3 from '../../assets/model3.jpg';
import model4 from '../../assets/model4.jpg';
import webImg from '../../assets/webImg.jpg';

import { FaFacebook, FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa';

const modelArray = [
    { imgSrc: model, name: 'Charlotte Roselei', details: 'Managing Director' },
    { imgSrc: model2, name: 'Skyla BrakingHom', details: 'Co-Founder' },
    { imgSrc: model3, name: 'Mark Dwen', details: 'Chief Executive Officer' },
    { imgSrc: model4, name: 'David Kennington', details: 'Co-Founder' },
];

const iconSize = 20;

const ModelShow: React.FC = () => {
    return (
        <>
            <div className="modelParent">
                <div className="modelWrapper">
                    <div className="modelHead">
                        <h2>// OUR TEAM</h2>
                        <h1>Our Leadership Team</h1>
                        <p>We help businesses elevate their value through custom software development,
                        product design, QA and consultancy services.</p>
                    </div>
                    <div className="modelShowWrapper">
                        {modelArray.map((d: any, i: any) => (
                            <React.Fragment key={i}>
                                <div className="modelPersons">
                                    <div className="personContainer">
                                        <img src={d.imgSrc} alt="model" />
                                        <div className="personDetails">
                                            <h1>{d.name}</h1>
                                            <h2>{d.details}</h2>
                                        </div>
                                    </div>
                                    <div className="personSocial">
                                        <div className="socialMedia">
                                            <div className="mediaIcons">
                                                <FaFacebook size={iconSize} />
                                            </div>
                                            <div className="mediaIcons">
                                                <FaInstagram size={iconSize} />
                                            </div>
                                            <div className="mediaIcons">
                                                <FaWhatsapp size={iconSize} />
                                            </div>
                                            <div className="mediaIcons">
                                                <FaPinterest size={iconSize} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))
                        }
                    </div>
                </div>
            </div>
            <div className="activityParent">
                <div className="activityWrapper">
                    <div className="activityItem">
                        <h1>450K+</h1>
                        <h2>Active Client</h2>
                    </div>
                    <div className="activityItem">
                        <h1>15K+</h1>
                        <h2>Projects done</h2>
                    </div>
                    <div className="activityItem">
                        <h1>50K+</h1>
                        <h2>Team advisors</h2>
                    </div>
                    <div className="activityItem">
                        <h1>10+</h1>
                        <h2>Glorious years</h2>
                    </div>
                </div>
            </div>
            <div className="meritParent">
                <div className="meritWrapper">
                    <div className="meritDetails">
                        <h2>// TECHNOLOGY INDEX</h2>
                        <h1>Improve and Innovate with the Tech Trends</h1>
                        <p>We hire and build your own remote dedicated development teams tailored to your specific needs.</p>
                        <div className="meritProgress one">
                            <h2>MOBILE DEVELOPMENT</h2>
                            <h2>80%</h2>
                        </div>
                        <div className="meritProgress two">
                            <h2>WEB DEVELOPMENT</h2>
                            <h2>95%</h2>
                        </div>
                        <div className="meritProgress three">
                            <h2>UI / UX DESIGN</h2>
                            <h2>70%</h2>
                        </div>
                    </div>
                    <div className="meritImg">
                        <img src={webImg} alt="webImg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModelShow;
