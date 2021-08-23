import React, { FC, Fragment, useState } from 'react';
import './Product.scss'
import { BsArrowRight } from 'react-icons/bs';
import { AiFillPlayCircle } from 'react-icons/ai';
import { FaCommentsDollar, FaTimes } from 'react-icons/fa';
import { IoRibbonSharp, IoTimerSharp } from 'react-icons/io5';
import { MdDevicesOther, MdPermDataSetting, MdSecurity } from 'react-icons/md';
import SpringModal from './SpringModal';

const iconSize = 40;
const productList = [
  {
    head: 'Product Design',
    description: 'Our product design service lets you prototype, test and validate your ideas.',
    icon: <MdDevicesOther size={iconSize} />,
  },
  {
    head: 'Data Analytics',
    description: 'Our product design service lets you prototype, test and validate your ideas.',
    icon: <MdPermDataSetting size={iconSize} />,
  },
  {
    head: 'Cyber Security',
    description: 'Our product design service lets you prototype, test and validate your ideas.',
    icon: <MdSecurity size={iconSize} />,
  },
  {
    head: 'Development',
    description: 'Our product design service lets you prototype, test and validate your ideas.',
    icon: <FaCommentsDollar size={iconSize} />,
  },
]
const Product: FC = () => {
  const [videoActive, setVideoActive] = useState<boolean>(false);

  return (
    <>
      <div className="productParent">
        <div className="testimony">
          <div className="headers">
            <div className="details">
              <h2>// ABOUT COMPANY</h2>
              <h1>Your Partner for Software Innovation</h1>
              <p>Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</p>
            </div>
            <div className="body">
              <div className="item">
                <div className="icon">
                  <IoRibbonSharp size={50} />
                </div>
                <h2>Experience</h2>
                <p>Our great team of more than 1400 software experts.</p>
              </div>
              <div className="item">
                <div className="icon">
                  <IoTimerSharp size={50} />
                </div>
                <h2>Quick support</h2>
                <p>We’ll help you test bold new ideas while sharing your.</p>
              </div>
            </div>
          </div>
          <div className="videoContainer">
            <div className="videoThumbnail">
              <div className="thumbnailIcon" onClick={() => setVideoActive(true)}>
                <AiFillPlayCircle size={80} className="playBtn" />
              </div>
            </div>
              <SpringModal open={videoActive} setOpen={setVideoActive} /> 
          </div>
        </div>
        <div className="productContainer">
          <div className="header">
            <p>// WHY CHOOSE US</p>
            <h1>
              Design the Concept
              of Your Business Idea Now
          </h1>
          </div>
          <div className="productWrapper">
            {productList.map((d: any, i: any) => (
              <Fragment key={i}>
                <div className="productItemParent">
                  <div className="productItem">
                    <h1>0{i + 1}</h1>
                    <h2>{d.head}</h2>
                    <p>{d.description}</p>
                    <div className="btnWrap">
                      <BsArrowRight size={30} className="icon" />
                      <h2>Learn More</h2>
                    </div>
                    <div className="endIcon">
                      {d.icon}
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="productItem2">
            <div className="productItem2Wrap">
              <div className="productItem2Contain">
                <h1>25+</h1>
                <h2>
                  Countries Worldwide
              </h2>
                <p>
                  To succeed, every software solution must be deeply integrated into the existing tech environment..
              </p>
              </div>
            </div>
            <div className="productItem2Wrap">
              <div className="productItem2Contain">
                <h1>120k</h1>
                <h2>
                  Happy Customers
              </h2>
                <p>
                  To succeed, every software solution must be deeply integrated into the existing tech environment..
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product;
