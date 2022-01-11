import "../../../styles/Projects.css";
import { projectsList } from "./projectsList";
import { ProjectCard, ProjectCardHead, ProjectCardBody } from "./OtherComponents";

const Projects: React.FC = () => {
  return (
    <>
      {projectsList.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectCardHead title={project.title} description={project.description} />
          <ProjectCardBody project={project} />
        </ProjectCard>
      ))}
    </>
  );
};

export default Projects;
