import Image from "next/image";
import Link from "next/link";
import React from "react";
import ClickAwayListener from "react-click-away-listener";

function ProjectInfo({
  handleClickAway,
  setNull,
  project,
}: {
  handleClickAway: any;
  setNull: any;
  project: any;
}) {
  const { name, excerpt, description, technologies, img, githubLink, link } =
    project;

  function handleButtonClick() {
    setNull();
  }

  return (
    <ClickAwayListener onClickAway={handleButtonClick}>
      <div
        className="pos__relative snipcss-9ePpH ProjectInfoDiv"
        onClick={handleClickAway}
      >
        <div className="d-flex justify-content-between header">
          <button
            className="none-button projectInfoButton"
            type="button"
            onClick={handleButtonClick}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#8F9BB3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14.0055 7.835L10.1255 11.715L14.0055 15.595C14.098 15.6876 14.1715 15.7975 14.2216 15.9185C14.2717 16.0394 14.2975 16.1691 14.2975 16.3C14.2975 16.4309 14.2717 16.5606 14.2216 16.6815C14.1715 16.8025 14.098 16.9124 14.0055 17.005C13.9129 17.0976 13.803 17.171 13.682 17.2211C13.561 17.2712 13.4314 17.297 13.3005 17.297C13.1695 17.297 13.0399 17.2712 12.9189 17.2211C12.798 17.171 12.688 17.0976 12.5955 17.005L8.00546 12.415C7.91276 12.3225 7.83921 12.2126 7.78903 12.0916C7.73885 11.9707 7.71302 11.841 7.71302 11.71C7.71302 11.579 7.73885 11.4494 7.78903 11.3284C7.83921 11.2074 7.91276 11.0975 8.00546 11.005L12.5955 6.415C12.688 6.3223 12.7979 6.24875 12.9188 6.19857C13.0398 6.14839 13.1695 6.12256 13.3005 6.12256C13.4314 6.12256 13.5611 6.14839 13.6821 6.19857C13.8031 6.24875 13.913 6.3223 14.0055 6.415C14.3855 6.805 14.3955 7.445 14.0055 7.835Z"
                fill="#8F9BB3"
              ></path>
            </svg>
          </button>
          <span className="ProjectName">{name}</span>
        </div>
        <div className="main__post">
          <p className="te mb-4">{excerpt}</p>
          <Image
            src={"/" + img}
            alt="Piggment"
            width={2000}
            height={2000}
            className="ProjectInfoImg"
          />
          <h4>About</h4>
          <p className="ProjectInfoDescription">{description}</p>
          <h4>Technologies</h4>
          <p className="d-flex flex-wrap">
            {technologies.map((technology: any, index: number) => {
              return (
                <span key={index} className="d-block mb-1">
                  {technology}
                </span>
              );
            })}
          </p>

          <h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            Github
          </h4>
          <p className="ProjectInfoLink">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {githubLink}
            </a>
          </p>
        </div>
        {link ? (
          <a
            className="open__project"
            target="_blank"
            id="cardHover"
            rel="noopener noreferrer"
            href={link}
          >
            Open Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
            </svg>
          </a>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}

export default ProjectInfo;
