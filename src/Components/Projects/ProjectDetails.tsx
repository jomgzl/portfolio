// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./ProjectDetails.module.css";
import { useTranslation, Trans } from "react-i18next";

function ProjectDetails() {
	// const { projectId } = useParams();
	const location = useLocation();
	const { id, logo, github } = { ...location.state };
	const { t } = useTranslation();

	// const keywords = [
	// 	"code",
	// 	"task",
	// 	"app",
	// 	"simple",
	// 	"straightforward",
	// 	"efficient.",
	// 	"Node.js,",
	// 	"Express.js",
	// 	"MySQL2",
	// 	"built",
	// 	"scratch.",
	// 	"build",
	// 	"website",
	// 	"scratch,",
	// 	"represent",
	// 	"showcase",
	// 	"skills",
	// 	"profile.",
	// 	"React,",
	// 	"Vite",
	// 	"TypeScript.",
	// 	"quest",
	// 	"passion",
	// 	"programming,",
	// 	"password",
	// 	"generator",
	// 	"Python",
	// 	"multiple",
	// 	"generation",
	// 	"options.",
	// ];

	// const customizedDescription = t(`projects.${id}.description`)
	// 	.split(" ")
	// 	.map((word: string) => {
	// 		return (
	// 			<span>
	// 				{keywords.includes(word) ? <strong>{word}</strong> : word}{" "}
	// 			</span>
	// 		);
	// 	});

	return (
		<div className={styles.containerGeneralProjectDetails}>
			<div className={`container ${styles.containerProjectDetails}`}>
				<div className={styles.projectDetailsHeader}>
					<h1 className={styles.projectDetailsTitle}>
						{t(`projects.${id}.title-details`)}
					</h1>
					<img
						className={styles.projectDetailsImage}
						src={`/${logo}`}
						alt="Project Logo"
					/>
				</div>
				<p className={styles.projectDetailsParagraph}>
					<Trans i18nKey={`projects.${id}.description`} />
				</p>
				<button type="button" className={styles.projectSourceButton}>
					<a href={github} target="_blank" rel="noopener noreferrer">
						{"</> Sources"}
					</a>
				</button>
			</div>
		</div>
	);
}

export default ProjectDetails;
