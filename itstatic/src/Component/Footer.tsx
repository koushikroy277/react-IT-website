import React from 'react';
import './Footer.scss';

// Icons
import { FaTelegramPlane } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <>
            <div className="footer">
                <div className="footerWrapper">
                    <div className="footerColumns">
                        <div className="footerItem">
                            <h1>
                                Services
                            </h1>
                            <div className="footerService">
                                <h2>Web Development</h2>
                                <h2>App Development</h2>
                                <h2>On-Demand Apps</h2>
                                <h2>Dedicated Team</h2>
                                <h2>iOS & Android</h2>
                            </div>
                        </div>
                        <div className="footerItem">
                            <h1>
                                Learn
                            </h1>
                            <div className="footerService">
                                <h2>Business Management Tools</h2>
                                <h2>Gambling & Betting Web Apps</h2>
                                <h2>Software as a Service (SaaS)</h2>
                                <h2>Sports and Fitness App</h2>
                                <h2>Social Media Platform</h2>
                            </div>
                        </div>
                        <div className="footerItem">
                            <h1>
                                Company
                            </h1>
                            <div className="footerService">
                                <h2>About Company</h2>
                                <h2>For Customers</h2>
                                <h2>Blogs & News</h2>
                                <h2>Career & Reviews</h2>
                                <h2>Sitemap</h2>
                            </div>
                        </div>
                        <div className="footerItem">
                            <h1>
                                Subscribe
                            </h1>
                            <div className="footerService">
                                <h3>Follow our newsletter to stay updated about agency.</h3>
                                <div className="footerInput">
                                    <input type="email" name="email" id="email"/>
                                    <div className="icon">
                                        <FaTelegramPlane size={30}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
