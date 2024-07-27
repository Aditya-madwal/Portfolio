import React from "react";
import arrowimg from "../assets/others/arrow.png";

function ProjectCard(props) {
  // let techstack = ["23e32", "3232"];
  return (
    <article className=" project-card rounded-xl bg-red-50  p-5 mb-4 shadow-sm w-full">
      <h3 className="mt-4 text-lg font-medium sm:text-xl mb-3">
        {props.title}
      </h3>
      <p className="mt-1 text-sm text-gray-700 mb-3">{props.desc}</p>
      <div
        className="flex items-start sm:gap-8 w-full"
        style={{ wordBreak: "break-word" }}>
        <div>
          <div className="flex flex-wrap">
            {props.techstack.map((t) => {
              return (
                <strong className="rounded-full border bg-[#708871] px-3 py-1.5 text-[10px] font-medium text-white mr-2 mb-2">
                  #{t}
                </strong>
              );
            })}
          </div>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>

              <p className="text-xs font-medium">{props.timeperiod}</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
              <a
                href={props.githublink}
                className="underline hover:text-gray-700">
                Github Repo →
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
