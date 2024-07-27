import React from "react";
import { experience } from "../assets/data.";

function Exp() {
  return (
    <div className="bg-[#708871] flex flex-col items-center  justify-center p-[40px] mr-[5vw] ml-[5vw] border-0 b-r exp-section mb-[50px]">
      <span className="fancy-font text-5xl">Experience</span>
      <div>
        <hr className="w-[3rem] mt-2 mb-8" />
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-[90vw]">
        {experience.map((i) => {
          if (i.id % 2 == 0) {
            return (
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10 w-[80%]">
                  <time className="font-mono italic">{i.timeperiod}</time>
                  <div className="text-lg font-black">{i.role}</div>
                  <div className="text-md font-medium">
                    {i.title}, {i.firm}
                  </div>
                  <br />
                  {i.desc}
                </div>
                {i.id == experience.length ? <></> : <hr />}
              </li>
            );
          } else {
            return (
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end w-[80%]">
                  <time className="font-mono italic">{i.timeperiod}</time>
                  <div className="text-lg font-black">{i.role}</div>
                  <div className="text-md font-medium">
                    {i.title}, {i.firm}
                  </div>
                  <br />
                  {i.desc}
                </div>
                {i.id == experience.length ? <></> : <hr />}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Exp;
