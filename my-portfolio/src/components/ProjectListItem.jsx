import "../../styles/Projects.scss";

function ProjectListItem({ project }) {
  const { name, link, thumbNail, description } = project;

  return (
    <li className="project-container">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={thumbNail}
          alt={`${name} homepage`}
          className="project-thumbnail"
        />
      </a>
      <div className="project-info">
        <a href={link} target="_blank" rel="noreferrer">
          <h3>{name}</h3>
        </a>
        <div className="divider"></div>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default ProjectListItem;
