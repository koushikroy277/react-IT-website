import React, { useState } from 'react';
import './Tech.scss';
import { FaDesktop, FaGlobe, FaTablet } from 'react-icons/fa';
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';
import { IoWatch } from 'react-icons/io5';
import { FcMindMap, FcSportsMode, FcScatterPlot, FcLineChart, FcGenericSortingDesc, FcEngineering } from 'react-icons/fc';

const iconSize = 50;

const techList = [
    { icons: <AiFillAndroid size={iconSize} />, head: 'ANDROID', },
    { icons: <AiFillApple size={iconSize} />, head: 'IOS', },
    { icons: <FaDesktop size={iconSize} />, head: 'WEB', },
    { icons: <FaGlobe size={iconSize} />, head: 'IOT', },
    { icons: <IoWatch size={iconSize} />, head: 'WATCH', },
    { icons: <FaTablet size={iconSize} />, head: 'TAB', },
];

const reviewArray = [
    { title: 'Soft Tech', subTitle: 'Managing Director', icons: <FcEngineering size={iconSize} />, review: 'Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.' },
    { title: 'MoonLik LTD.', subTitle: 'Manager of Company', icons: <FcGenericSortingDesc size={iconSize} />, review: 'Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless. The best part...always solving problems with great original ideas!.' },
    { title: 'OneHost', subTitle: 'Client of Company', icons: <FcLineChart size={iconSize} />, review: 'Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.' },
    { title: 'LinkNode LTD.', subTitle: 'Chief Executive Officer', icons: <FcMindMap size={iconSize} />, review: 'Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless. The best part...always solving problems with great original ideas!.' },
    { title: 'RenoTide', subTitle: 'Post Manager', icons: <FcScatterPlot size={iconSize} />, review: 'Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.' },
    { title: 'DotCom LTD.', subTitle: 'Managing Director', icons: <FcSportsMode size={iconSize} />, review: 'Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless. The best part...always solving problems with great original ideas!.' },
]

const Tech: React.FC = () => {
    const [slideX, setSlideX] = useState(0);

    return (
        <>
            <div className="techParent">
                <div className="techWrapper">
                    <div className="header">
                        <p>// TECHNOLOGY INDEX</p>
                        <h1>We Deliver Solution with
                        the Goal of Trusting Relationships</h1>
                    </div>
                    <div className="techElemContainer">
                        {techList.map((d: any, i: any) => (
                            <React.Fragment key={i}>
                                <div className="techElem">
                                    <div className="techIcon">
                                        {d.icons}
                                    </div>
                                    <h1>{d.head}</h1>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <div className="techParent2">
                <div className="techWrapper2">
                    <div className="header">
                        <p>// OUR CLIENTS</p>
                        <h1>We are Trusted 15+ Countries Worldwide</h1>
                    </div>
                    <div className="reviewContainer">
                        {reviewArray.map((d: any, i: any) => (
                            <React.Fragment key={i}>
                                <div className="reviewElem" style={{
                                    transform: `translateX(${slideX}%)`,
                                    transition: 'transform .3s ease',
                                }}>
                                    <div className="header">
                                        <div className="reviewIcon">
                                            {d.icons}
                                        </div>
                                        <h1>{d.title}</h1>
                                        <h2>{d.subTitle}</h2>
                                    </div>
                                    <p>{d.review}</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="dotBtn">
                        <div className="dots" onClick={() => setSlideX(0)} style={{ backgroundColor: slideX === 0 ? '#332d5f' : '#fff' }}></div>
                        <div className="dots" onClick={() => setSlideX(-100)} style={{ backgroundColor: slideX === -100 ? '#332d5f' : '#fff' }}></div>
                        <div className="dots" onClick={() => setSlideX(-210)} style={{ backgroundColor: slideX === -210 ? '#332d5f' : '#fff' }}></div>
                        <div className="dots" onClick={() => setSlideX(-320)} style={{ backgroundColor: slideX === -320 ? '#332d5f' : '#fff' }}></div>
                        <div className="dots" onClick={() => setSlideX(-430)} style={{ backgroundColor: slideX === -430 ? '#332d5f' : '#fff' }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tech
