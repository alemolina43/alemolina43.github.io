import projectData from "../../data/projectsData";
import ProjectListItem from "./ProjectListItem";
import "../../styles/Projects.scss";

function ProjectList() {
  const parsedProjects = projectData.map((project) => (
    <ProjectListItem key={project.name} project={project} />
  ));

  return (
    <div id="projects">
      <h2 className="highlight">Take a look at my projects!</h2>
      <ul className="projects-list">{parsedProjects}</ul>;
    </div>
  );
}

export default ProjectList;
