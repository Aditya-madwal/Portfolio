import React from "react";

import githubIcon from "../assets/socials/github.png";
import instagramIcon from "../assets/socials/instagram.png";
import linkedinIcon from "../assets/socials/linkedin.png";
import whatsIcon from "../assets/socials/whatsapp.png";

import aboutbitmoji from "../assets/bitmojis/embarrassed spotlight.png";
import emailIcon from "../assets/others/email.png";
import houseIcon from "../assets/others/house.png";
import languageIcon from "../assets/others/language.png";
import mapsAndFlagsIcon from "../assets/others/maps-and-flags.png";
import mortarboardIcon from "../assets/others/mortarboard.png";
import phoneCallIcon from "../assets/others/phone-call.png";

function About() {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex h-fit items-center about-section bg-[#708871]">
        <div className="about-img w-[50%]">
          <img src={aboutbitmoji} className="w-full" alt="" />
        </div>
        {/* ---------------------- */}
        <div className="about-text w-[50%] p-[20px]">
          <span className="fancy-font text-5xl">About Me</span>
          <hr className="about-hr w-[3rem] mt-2 mb-4" />
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            magnam mollitia qui id aliquid assumenda sint fuga odit maxime
            animi. Voluptas, tempore? Ad veritatis ipsam ipsa quas quae
            dignissimos saepe quo laborum? Non nesciunt repellat illo beatae
            modi.
          </span>
          <div className="infoblock">
            <img src={phoneCallIcon} alt="phone" />
            <span>+91 8130492789</span>
          </div>
          <div className="infoblock">
            <img src={emailIcon} alt="email" />
            <span>adityamadwal@gmail.com</span>
          </div>
          <div className="infoblock">
            <img src={houseIcon} alt="home" />
            <span>Vasundhara, Ghaziabad, U.P, India</span>
          </div>
          <div className="infoblock">
            <img src={mortarboardIcon} alt="college" />
            <span>K.I.E.T Group of Institutions</span>
          </div>
          <div className="infoblock">
            <img src={languageIcon} alt="languages" />
            <span>English, Hindi</span>
          </div>
          <button className="btn mt-7 w-[200px]">
            <a href="mailto:adityamadwal@gmail.com">Email Me</a>
          </button>
        </div>
        <div className="about-socials mt-7 flex flex-col justify-center items-start">
          <button className="btn social-btn w-fit h-fit">
            <a href="https://github.com/aditya-madwal/">
              <img src={githubIcon} alt="instagram account" className="w-7" />
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
              <img src={linkedinIcon} alt="instagram account" className="w-7" />
            </a>
          </button>
          <button className="btn social-btn w-fit h-fit">
            <a href="https://wa.me/8130492789">
              <img src={whatsIcon} alt="whatsapp account" className="w-7" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
