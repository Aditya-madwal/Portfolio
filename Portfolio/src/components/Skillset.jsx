import React from "react";
import SkillCard from "./SkillCard";

import { skillset } from "../assets/data.";

function Skillset(props) {
  return (
    <div className="flex mt-[100px] justify-center items-center skill-set ml-[10vw] ">
      <div>
        <span className="fancy-font text-5xl ">My Skill Set</span>
        <div className="skill-hr">
          <hr className="w-[3rem] mt-2" />
        </div>
      </div>
      <div className="skill-container carousel carousel-center rounded-box w-full h-fit space-x-4 p-4  shadow bg-transparent">
        {props.start ? (
          skillset.map((s) => {
            return <SkillCard title={s.title} percent={s.percent} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Skillset;
