import "../../../styles/Projects.css";
import { projectsList } from "./projectsList";
import { ProjectCard, ProjectCardHead, ProjectCardBody } from "./OtherComponents";

const Projects: React.FC = () => {
  return (
    <>
      {projectsList.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectCardHead project={project} />
          <ProjectCardBody project={project} />
        </ProjectCard>
      ))}
    </>
  );
};

export default Projects;
