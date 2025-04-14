import styles from "./Project.module.css";
import { useTranslation } from "react-i18next";

interface Props {
	id: number;
	title: string;
	logo: string;
	summary: string;
	description: string;
	technologies: string[];
	github: string;
	onClick: () => void;
}

function Project({ id, logo, technologies, onClick }: Props) {
	const { t } = useTranslation();

	return (
		<div className={styles.projectContainer} onClick={onClick}>
			<div>
				<img
					className={styles.projectLogo}
					src={logo}
					alt={t(`projects.${id}.title`)}
				/>
			</div>
			<div className={styles.projectPresentation}>
				<h3 className={styles.projectTitle}>{t(`projects.${id}.title`)}</h3>
				<p className={styles.projectDescription}>{t(`projects.${id}.summary`)}</p>
				<div className={styles.projectTechnologies}>
					{technologies.map((technology) => (
						<div key={technology} className={styles.projectTechnology}>
							{technology}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Project;