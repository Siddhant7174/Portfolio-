import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Siddhant</h2>
        <div className="prompt">
          <p>A Web Developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/siddhant-singh-15b3531b7/"
          target="_blank"
          rel="noreferrer"
          >
            <LinkedInIcon  />
          </a>
          
          <a href="mailto:siddhantsingh.1654@gmail.com"
          target="_blank"
          rel="noreferrer"
          >
            <EmailIcon />
          </a>
          
          <a href="https://www.github.com/Siddhant7174/"
          target="_blank"
          rel="noreferrer"
          >
            <GithubIcon/>
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, Javascript
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C++, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
