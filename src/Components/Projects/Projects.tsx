import styles from "./Projects.module.css";
import Project from "./Project";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Project {
	id: number;
	title: string;
	logo: string;
	summary: string;
	description: string;
	technologies: string[];
	github: string;
}

interface Props {
	listOfProjects: Project[];
}

function Projects({ listOfProjects }: Props) {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const handleProjectClick = (project: Project) => {
		navigate(`/project/${project.id}`, { state: project });
	};

	return (
		<div id="projects" className={styles.containerGeneralProjects}>
			<div className={`container ${styles.projectsContainer}`}>
				<h1 className={styles.projectsTitle}>{t("side-projects")}</h1>
				{listOfProjects.map((project) => (
					<Project
						key={project.id}
						onClick={() => handleProjectClick(project)}
						{...project}
					/>
				))}
			</div>
		</div>
	);
}

export default Projects;
