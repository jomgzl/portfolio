import styles from "./Experiences.module.css";
import Experience from "./Experience";
import { useTranslation } from "react-i18next";

interface Experiences {
	id: number;
	title: string;
	date: string;
	logo: string;
	description: string;
	tasks: string[];
	skills: string[];
}

interface Props {
	listOfExperiences: Experiences[];
}

function Experiences({ listOfExperiences }: Props) {
	const { t } = useTranslation();

	return (
		<div
			id="work-experiences"
			className={styles.containerGeneralExperiences}
		>
			<div className={`container ${styles.experiencesContainer}`}>
				<h1 className={styles.experiencesTitle}>
					{t("work-experiences-title")}
				</h1>
				<div className={styles.experiences}>
					{listOfExperiences.map((experience) => (
						<Experience key={experience.id} {...experience} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Experiences;
