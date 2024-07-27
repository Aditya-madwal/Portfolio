import React, { useEffect, useState } from "react";
import projectbitmoji from "../assets/bitmojis/check box.png";
import ProjectCard from "./ProjectCard";
import arrowimg from "../assets/others/arrow.png";
import arrowdownimg from "../assets/others/arrow-down.png";

import { projects } from "../assets/data.";

function Projects() {
  let projectsArray = [...projects];
  let [index, setIndex] = useState(2);
  let [toggle, settoggle] = useState(false);

  useEffect(() => {
    if (index == projects.length) {
      settoggle(true);
    }
  }, [index]);

  let show_array = projects.slice(0, index);

  let loadmoreprojects = () => {
    setIndex(index + 1);
  };

  let toggleToGithub = () => {
    settoggle(true);
  };

  return (
    <div className="flex justify-center mb-[100px]">
      <div className="flex justify-between items-start w-[80vw]">
        <div className="project-text w-[60vw]">
          <span className="fancy-font text-5xl ">Projects</span>
          <div>
            <hr className="w-[3rem] mt-2 mb-8" />
          </div>
          <div className="project-container flex flex-wrap justify-start items-center">
            {show_array.map((project) => {
              return (
                <ProjectCard
                  techstack={project.techstack}
                  githublink={project.githublink}
                  title={project.title}
                  desc={project.description}
                  timeperiod={project.timeperiod}
                />
              );
            })}
          </div>
          {toggle ? (
            <a
              className="btn w-full github-btn"
              href="https://github.com/aditya-madwal/">
              Show Github →
            </a>
          ) : (
            <button
              className="btn w-full github-btn"
              onClick={() => loadmoreprojects()}>
              Load More Projects
              <img src={arrowdownimg} alt="" className="w-[1em]" />
            </button>
          )}
        </div>
        <div className="project-bitmoji w-[30vw]">
          <img src={projectbitmoji} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
