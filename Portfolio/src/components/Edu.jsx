import React from "react";
import edubit from "../assets/bitmojis/sticker.png";

function Edu() {
  return (
    <div className="flex  mt-[50px] justify-center items-center mr-[10vw] ml-[10vw] ">
      <div className="edu-text flex flex-col w-[60vw]">
        <span className="fancy-font text-5xl ">Academic Journey so far</span>
        <div>
          <hr className="w-[3rem] mt-2 mb-8" />
        </div>
        <div className="stats stats-vertical lg:stats-horizontal shadow bg-transparent w-fit">
          <div className="stat flex flex-col items-center">
            <div className="stat-title">High School</div>
            <div className="stat-value font-light fancy-font">92.4%</div>
            <div className="stat-desc">2019-2020</div>
            <div className="stat-desc font-bold">Vanasthali Public School</div>
          </div>

          <div className="stat flex flex-col items-center">
            <div className="stat-title">Intermediate</div>
            <div className="stat-value font-light fancy-font">94%</div>
            <div className="stat-desc">2021-2022</div>
            <div className="stat-desc font-bold">Vanasthali Public School</div>
          </div>

          <div className="stat flex flex-col items-center">
            <div className="stat-title">University</div>
            <div className="stat-value font-light fancy-font">7.8</div>
            <div className="stat-desc">2022-2026</div>
            <div className="stat-desc font-bold">
              K.I.E.T Group of Institutions <br />
              B.Tech (Computer Science)
            </div>
          </div>
        </div>
      </div>
      <div className="edu-bitmoji">
        <img src={edubit} alt="bitmoji" className="w-[50vw]" />
      </div>
    </div>
  );
}

export default Edu;
