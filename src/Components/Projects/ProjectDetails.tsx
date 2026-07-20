import { useLocation } from "react-router-dom";
import styles from "./ProjectDetails.module.css";
import { useTranslation, Trans } from "react-i18next";

function ProjectDetails() {
	const location = useLocation();
	const { id, logo, github } = { ...location.state };
	const { t } = useTranslation();

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
