import React, { FC, Fragment, useState } from 'react';
import './HomeService.scss';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { FaAppStoreIos, FaGlobe } from 'react-icons/fa';
import { SiAffinitydesigner } from 'react-icons/si';
import { AiOutlineBarChart } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { GoBrowser } from 'react-icons/go';
import AI from '../../assets/ai.jpg';
import AI2 from '../../assets/ai8.jpg';
import AI3 from '../../assets/ai3.jpg';
import AI4 from '../../assets/ai4.jpg';
import AI5 from '../../assets/ai5.jpg';
import AI6 from '../../assets/ai7.jpg';

const iconSize = 50;
const serviceList = [
    { icon: <MdDeveloperMode size={iconSize} />, head: 'Web Development', des: 'We carry more than just good coding skills. Our experience makes us stand out from other web development.' },
    { icon: <FaAppStoreIos size={iconSize} />, head: 'Mobile Development', des: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.' },
    { icon: <SiAffinitydesigner size={iconSize} />, head: 'UI/UX Design', des: 'Build the product you need on time with an experienced team that uses a clear and effective design process.' },
    { icon: <GoBrowser size={iconSize} />, head: 'QA & Testing', des: 'Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.' },
    { icon: <MdDeveloperMode size={iconSize} />, head: 'IT Counsultancy', des: 'Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.' },
    { icon: <FaGlobe size={iconSize} />, head: 'Dedicated Team', des: 'Over the past decade, our customers succeeded by leveraging Intellectsoft’s process of building, motivating.' },
]

const projectList = [
    { url: AI6, head: 'eCommerce Website', des: 'LOGIC / DEVELOPMENT' },
    { url: AI2, head: 'Social Media App', des: 'DESIGN / DEVELOPMENT' },
    { url: AI4, head: 'Budget Allocating App', des: 'CALCULATION / LOGIC' },
    { url: AI3, head: 'Covid-19 Tracker', des: 'CHART / GUI' },
    { url: AI5, head: 'Computer Vision Project', des: 'AI / COMPUTER VISION' },
    { url: AI, head: 'Machine Learning App', des: 'AI / DEVELOPMENT' },
]

const HomeService: FC = () => {
    const [slideX, setSildeX] = useState(0);

    const handleSlideNext = () => {
        if (slideX <= -400) return;

        setSildeX(x => x - 100);
    }
    const handleSlidePrev = () => {
        if (slideX >= 0) return;

        setSildeX(x => x + 100);
    }

    return (
        <>
            <div className="serviceParent">
                <div className="serveHead">
                    <p>// OUR SERVICES</p>
                    <h1>We offer a variety of IT services</h1>
                </div>
                <div className="serviceWrapper">
                    {serviceList.map((d: any, i: any) => (
                        <Fragment key={i}>
                            <div className="serviceElem">
                                <div className="serveIcon">{d.icon}</div>
                                <div className="serveDetail">
                                    <h1>{d.head}</h1>
                                    <p>{d.des}</p>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
                <div className="serveBanner">
                    <div className="bannerWrapper">
                        <div className="bannerDetail">
                            <p>// We Carry More Than Just Good Coding Skills</p>
                            <h1>
                                Let's just build your website
                            </h1>
                        </div>
                        <button>Contact Us</button>
                    </div>
                </div>
                <div className="serveProject">
                    <div className="projectHead">
                        <div className="headers">
                            <h2>// LATEST CASE STUDIES</h2>
                            <h1>Introduce our projects</h1>
                        </div>
                        <p>Software development outsourcing is just a tool to achieve business goals. But there is no way to get worthwhile results without cooperation and trust between a client company.</p>
                    </div>
                    <div className="serveInside">
                        {projectList.map((d: any, i: any) => (
                            <Fragment key={i}>
                                <div className="projectContainer" style={{
                                    transform: `translateX(${slideX}%)`,
                                    transition: 'transform .5s ease-in-out'
                                }}>
                                    <div className="projectWrapper">
                                        <div className="transBg"></div>
                                        <img src={d.url} alt="project" />
                                        <div className="projectDetail">
                                            <div className="projectIcon">
                                                <BsArrowRight size={30} />
                                            </div>
                                            <h1>{d.head}</h1>
                                            <p>{d.des}</p>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                    <div className="control">
                        <div className="arrow" onClick={handleSlidePrev} style={{
                            color: slideX >= 0 ? '#999' : '#000',
                        }}>
                            <BsArrowLeft size={30} />
                        </div>
                        <div className="arrow" onClick={handleSlideNext} style={{
                            color: slideX <= -400 ? '#999' : '#000',
                        }}>
                            <BsArrowRight size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeService;
