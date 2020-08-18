import React from "react";
import ProjectCard from "./ProjectCard";
import { Grid } from "@material-ui/core";
import projectList from "../projectList";

const Projects = () => {
  const getProjectCards = (projectObject) => {
    return (
      <Grid item xs={12} md={6}>
        <ProjectCard {...projectObject} />
      </Grid>
    );
  };

  return (
    <>
      <Grid container xs={12} spacing={1}>
        {projectList.map((p) => getProjectCards(p))}
      </Grid>
    </>
  );
};

export default Projects;
