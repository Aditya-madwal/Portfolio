import React from "react";

function SkillCard(props) {
  let percent = props.percent;
  return (
    <div className="carousel-item w-fit">
      <div className="skill-card flex flex-col justify-center items-center w-fit mr-[30px]">
        <div
          className="radial-progress"
          style={{
            "--value": `${percent}`,
            "--size": "12rem",
            "--thickness": "1rem",
            color: "#708871",
          }}
          role="progressbar">
          {percent}%
        </div>
        <span className="text-xl font-extrabold mt-2">{props.title}</span>
      </div>
    </div>
  );
}

export default SkillCard;
