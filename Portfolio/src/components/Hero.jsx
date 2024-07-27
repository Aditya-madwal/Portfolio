import React from "react";
import githubIcon from "../assets/socials/github.png";
import instagramIcon from "../assets/socials/instagram.png";
import whatsIcon from "../assets/socials/whatsapp.png";
import linkedinIcon from "../assets/socials/linkedin.png";
import heybitmoji from "../assets/bitmojis/hey.png";
import resume from "../assets/Aditya_Madwal_resume.pdf";

function Hero() {
  return (
    <div className="flex hero-section mb-0">
      <div className="herosocials w-[10%] h-[90vh] flex justify-center items-center">
        <div className="socialicon flex flex-col justify-center items-center">
          <button className="btn social-btn w-fit h-fit">
            <a href="https://github.com/aditya-madwal/">
              <img src={githubIcon} alt="github account" className="w-7" />
            </a>
          </button>
          <button className="btn social-btn w-fit h-fit">
            <a href="https://www.instagram.com/__adityyaaaaa/">
              <img
                src={instagramIcon}
                alt="instagram account"
                className="w-7"
              />
            </a>
          </button>
          <button className="btn social-btn w-fit h-fit">
            <a href="https://www.linkedin.com/in/aditya-madwal-118525257/">
              <img src={linkedinIcon} alt="linkedin account" className="w-7" />
            </a>
          </button>
          <button className="btn social-btn w-fit h-fit">
            <a href="https://wa.me/8130492789">
              <img src={whatsIcon} alt="whatsapp account" className="w-7" />
            </a>
          </button>
        </div>
      </div>
      {/* heading section */}
      <div className="heroheading w-[45%] h-[90vh] flex justify-left items-center">
        <span className="font- text-lg">
          <span className="fancy-font text-6xl" style={{ lineHeight: "1.3em" }}>
            Hey!{" "}
          </span>
          This is <br />
          <span className="fancy-font text-7xl">Aditya Madwal.</span>
          <br />
          Django Developer | React Developer | UI/UX
          <br />
          <a
            className="btn mt-5 w-[40%] font-medium"
            href="https://drive.google.com/file/d/1gXGn-ea1KKMx7QIi6E9um19Tj1AKMdKH/view">
            View Resume →
          </a>
        </span>
      </div>
      {/* bitmoji section */}
      <div className="herobitmoji w-[45%] flex justify-end items-end h-fit">
        <img src={heybitmoji} alt="" className="h-fit" style={{}} />
      </div>
    </div>
  );
}

export default Hero;
