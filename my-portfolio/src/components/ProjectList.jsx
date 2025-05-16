import projectData from "../../data/projectsData";
import ProjectListItem from "./ProjectListItem";
import "../../styles/Projects.scss";

function ProjectList() {
  const parsedProjects = projectData.map((project) => (
    <ProjectListItem key={project.name} project={project} />
  ));

  return <ul id="projects">{parsedProjects}</ul>;
}

export default ProjectList;
