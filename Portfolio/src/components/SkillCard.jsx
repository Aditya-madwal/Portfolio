import React, { useEffect, useState } from "react";

function SkillCard(props) {
  let percent = parseInt(props.percent);

  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count < percent) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 0.5);
      }, 10);

      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }
  }, [count]);

  return (
    <div className="carousel-item w-fit">
      <div className="skill-card flex flex-col justify-center items-center w-fit mr-[30px]">
        <div
          className="radial-progress"
          style={{
            "--value": `${count}`,
            "--size": "12rem",
            "--thickness": "1rem",
            color: "#708871",
          }}
          role="progressbar">
          {count}%
        </div>
        <span className="text-xl font-extrabold mt-2">{props.title}</span>
      </div>
    </div>
  );
}

export default SkillCard;
