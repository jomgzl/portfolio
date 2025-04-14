import { useState } from "react";
import styles from "./Experience.module.css";
import { useTranslation } from "react-i18next";

interface Props {
	id: number;
	title: string;
	date: string;
	logo: string;
	description: string;
	tasks: string[];
	skills: string[];
}

function Experience({ id, logo, tasks, skills }: Props) {
	let [showDetails, setShowDetails] = useState(false);
	const { t } = useTranslation();

	const showExperienceDetails = () => {
		setShowDetails(!showDetails);
	};

	return (
		<div
			className={`${styles.experienceMaster} ${
				showDetails ? styles.longPadding : styles.shortPadding
			}`}
		>
			<div
				className={styles.experienceHead}
				onClick={showExperienceDetails}
			>
				<div className={styles.experienceInformation}>
					<h4 className={styles.experienceDate}>
						{t(`experiences.${id}.date`)}
					</h4>
					<img
						src={logo}
						className={
							logo === "bsynchro.svg"
								? styles.bsynchroLogo
								: styles.companyLogo
						}
						alt="company-logo"
					/>
					<h4>{t(`experiences.${id}.title`)}</h4>
				</div>
					<img
						src="down-arrow.svg"
						className={`${styles.downArrow} ${
							showDetails ? styles.rotate : ""
						}`}
						alt="down arrow"
					/>
			</div>

			<div
				className={
					showDetails
						? styles.experienceDetailsShow
						: styles.experienceDetails
				}
			>
				<div className={styles.experienceDescriptionHead}>
					<div>
						<img src="" alt="" />
						<h5>Description</h5>
					</div>
					<p className={styles.experienceDescription}>
						{t(`experiences.${id}.description`)}
					</p>
				</div>

				<div className={styles.experienceTasksHead}>
					<h5>{t("tasks")}</h5>
					<ul className={styles.experienceTasks}>
						{tasks.map((task) => (
							<li key={task} className={styles.experienceTask}>
								{t(`experiences.${id}.tasks.${task}`)}
							</li>
						))}
					</ul>
				</div>

				<div className={styles.experienceSkillsHead}>
					<h5>{t("skills")}</h5>
					<div className={styles.experienceSkills}>
						{skills.map((skill) => (
							<div key={skill} className={styles.experienceSkill}>
								{skill}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
