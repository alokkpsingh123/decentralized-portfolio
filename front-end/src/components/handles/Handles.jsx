import React from "react";
import "./Handles.css";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Handles = () => {
  return (
    <section className="socials">
      <a
        href="https://www.linkedin.com/in/alokkpsingh123/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin className="icon" />
      </a>
      <a
        href="https://twitter.com/alokkpsingh123"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillTwitterSquare className="icon" />
      </a>
      <a
        href="https://github.com/alokkpsingh123"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare className="icon" />
      </a>
    </section>
  );
};

export default Handles;
