import React, { useState, Fragment } from "react";
import "./Banner.scss";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";
import bannerBg from "../../assets/bannerBg.jpg";
import bannerBg2 from "../../assets/bannerBg2.jpg";
import bannerBg3 from "../../assets/bannerBg3.jpg";
import bannerBg4 from "../../assets/bannerBg4.jpg";

const bannerElem: any[] = [
  {
    header: "FROM IDEA TO PRODUCT",
    para: "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
    imgUrl: bannerBg,
    listClass: "bannerBg",
  },
  {
    header: "END TO END DEVELOPMENT",
    para: "There is nothing to compromise when it comes to developing. We are here to satisfy the client's demand to the fullest",
    imgUrl: bannerBg2,
    listClass: "bannerBg2",
  },
  {
    header: "SOFTWARE OUTSOURCING",
    para: "Developing is good but we are not jst for here only. We outsource this softwares and enhance our profitibility & growth",
    imgUrl: bannerBg3,
    listClass: "bannerBg3",
  },
  {
    header: "100% CLIENT SATISFACTION",
    para: "We are well known for 24/7 customer care service which leads many of our clients & customers to chose our services",
    imgUrl: bannerBg4,
    listClass: "bannerBg4",
  },
];

const Banner: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const iconSize = 30;

  const handlePrev = () => {
    setIndex((i) => (i === 0 ? bannerElem.length - 1 : i - 1));
  };

  const handleNext = () => {
    setIndex((i) => (i === bannerElem.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      <div className="bannerParent">
        {bannerElem.map((d: any, i: any) => (
          <div className={ index === i ? 'bannerContainer active' : 'bannerContainer' } style={{ backgroundImage: "url(" + d.imgUrl + ")" }} key={i}>
            <div className="bannerWrapper">
              <div className="bannerItem">
                <h1> {d.header} </h1>
                <p> {d.para} </p>
                <button>LEARN MORE</button>
                <div className="controlBtn">
                  <div className="prevIcon" onClick={handlePrev}>
                    <AiOutlineArrowLeft size={iconSize} />
                  </div>
                  <h2>
                    {index > bannerElem.length ? bannerElem.length : index + 1}{" "}
                    / {bannerElem.length}
                  </h2>
                  <div className="nextIcon" onClick={handleNext}>
                    <AiOutlineArrowRight size={iconSize} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Banner;
