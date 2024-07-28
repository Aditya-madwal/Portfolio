import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skillset from "./components/Skillset";
import Edu from "./components/Edu";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import charcoalbg from "./assets/others/Charcoal Smudge.png";

function App() {
  const aboutRef = useRef();
  const ProjectRef = useRef();
  const skillRef = useRef();
  const contactRef = useRef();
  const eduRef = useRef();

  const [skillstart, setSkillStart] = useState(false);
  useEffect(() => {
    const skillobserver = new IntersectionObserver((e) => {
      eduRef.current ? console.log("skill dikh gya") : null;
      let e1 = e[0];
      console.log(e1.isIntersecting);
      e1.isIntersecting ? setSkillStart(true) : console.log("skill nhi dikha");
    });
    skillobserver.observe(skillRef.current);
  }, []);

  return (
    <div
      className="min-h-screen bg-hero-pattern bg-cover bg-center bg-fixed "
      style={{ cursor: `none`, backgroundImage: `url(${charcoalbg})` }}>
      {/* navbar------------------------------ */}
      <div>
        <div className="navbar m-0 h-[10vh]">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">
                <li>
                  <button
                    style={{ cursor: "none" }}
                    onClick={() => {
                      aboutRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}>
                    About
                  </button>
                </li>
                <li>
                  <button
                    style={{ cursor: "none" }}
                    onClick={() => {
                      skillRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}>
                    Skills & Academics
                  </button>
                </li>
                <li>
                  <button
                    style={{ cursor: "none" }}
                    onClick={() => {
                      ProjectRef.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}>
                    Projects
                  </button>
                </li>
              </ul>
            </div>
            <a className="btn logo-font nav-logo">AM.</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              <li>
                <button
                  style={{ cursor: "none" }}
                  onClick={() => {
                    aboutRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}>
                  About
                </button>
              </li>
              <li>
                <button
                  style={{ cursor: "none" }}
                  onClick={() => {
                    skillRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}>
                  Skills & Academics
                </button>
              </li>
              <li>
                <button
                  style={{ cursor: "none" }}
                  onClick={() => {
                    ProjectRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}>
                  Projects
                </button>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <button
              style={{ cursor: "none" }}
              className="btn font-bold  w-fit"
              onClick={() => {
                contactRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}
      <div className="app-container">
        <Hero />
        <div id="aboutdiv" ref={aboutRef}>
          <About />
        </div>
        <div>
          <Skillset start={skillstart} />
          <div ref={skillRef}>
            <Edu />
          </div>
        </div>
        <Exp />
        <div ref={ProjectRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
