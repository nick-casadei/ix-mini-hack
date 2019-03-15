import React from "react";
import { Header } from "govuk-react";

const Projects = () => {
  return (
    <>
      <Header level={1} size="LARGE">
        Projects
      </Header>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="500px"
        height="400px"
        src="https://github.com/JRhodes95/Golf-Ball-Trajectory-Modelling-in-Python"
      />
      <h2>Project Mentor: JP</h2>
    </>
  );
};

export default Projects;
