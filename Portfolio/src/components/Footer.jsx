import React from "react";

import githubIcon from "../assets/socials/footer-github.png";
import instagramIcon from "../assets/socials/footer-insta.png";
import linkedinIcon from "../assets/socials/footer-linkedin.png";
import whatsappIcon from "../assets/socials/footer-whatsapp.png";

import footerbit from "../assets/bitmojis/two thumbs up.png";

function Footer() {
  return (
    <div style={{ color: "#fef3e2" }} className="flex justify-center">
      <footer
        className="footer footer-center bg-[#708871] text-primary-content p-10 pb-0 flex flex-col justify-center items-center"
        style={{ color: "#fef3e2" }}>
        <aside>
          <a className="btn logo-font nav-logo" style={{ color: "#fef3e2" }}>
            AM.
          </a>
          <p>Get in touch me on :</p>
        </aside>
        <nav>
          <div>
            <a>
              <button className="btn social-btn w-fit h-fit">
                <a href="https://github.com/aditya-madwal/">
                  <img src={githubIcon} alt="github account" className="w-7" />
                </a>
              </button>
            </a>
            <a>
              <button className="btn social-btn w-fit h-fit">
                <a href="https://wa.me/8130492789">
                  <img
                    src={whatsappIcon}
                    alt="instagram account"
                    className="w-7"
                  />
                </a>
              </button>
            </a>
            <a>
              <button className="btn social-btn">
                <a href="https://www.linkedin.com/in/aditya-madwal-118525257/">
                  <img
                    src={linkedinIcon}
                    alt="instagram account"
                    className="w-7"
                  />
                </a>
              </button>
            </a>
            <a>
              <button className="btn social-btn w-fit h-fit">
                <a href="https://www.instagram.com/__adityyaaaaa/">
                  <img
                    src={instagramIcon}
                    alt="instagram account"
                    className="w-7"
                  />
                </a>
              </button>
            </a>
          </div>
        </nav>
        <div className="footer-bitmoji">
          <img src={footerbit} alt="" className="w-[30vw]" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
