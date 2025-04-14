import { useState } from "react";
import styles from "./Card.module.css";
import { useTranslation } from "react-i18next";

interface Skill {
	name: string;
	logo: string;
}

interface Props {
	id: number;
	skills: Skill[];
	heading: string;
	logo: string;
}

function Card({ id, skills, heading, logo }: Props) {
	let [isHovered, setIsHovered] = useState(false);
	let [isActive, setIsActive] = useState<number | null>(null);
	const { t } = useTranslation();

	const skillsList = skills.map((skill) => (
		<li
			key={skill.name}
			className={`list-group-item ${styles.listGroupItem}`}
		>
			<img
				src={skill.logo}
				alt={skill.name}
				className={`${styles.skillLogo} ${
					skill.name === "Node.js" || "SQL" ? styles.nodeLogo : ""
				} `}
			/>
			{t(`skills-cards.${id}.skills.${skill.name}`)}
		</li>
	));

	const fullCard = (
		<div
			className={`cardCustom ${styles.cardCustom} ${
				isHovered ? styles.cardCustomHover : ""
			}`}
			onMouseEnter={() => {
				setIsActive(id);
				setIsHovered(true);
			}}
			onMouseLeave={() => {
				setIsActive(null);
				setIsHovered(false);
			}}
		>
			<div
				className={`inner ${styles.inner} ${
					isActive === id ? styles.flip : ""
				}`}
			>
				<div className={styles.frontCard}>
					<div className={styles.cardHeaderCstFront}>
						<img
							src={logo}
							className={`card-img-top ${styles.customCardImgTopFront}`}
							alt="category-logo"
						/>
						{heading}
					</div>
				</div>
				<div
					className={styles.backCard}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<div className={styles.cardHeaderCstBack}>
						<img
							src={logo}
							className={styles.customCardImgTopBack}
							alt="category-logo"
						/>
						{heading}
					</div>
					<ul
						className={`list-group list-group-flush ${styles.listSkills}`}
					>
						{skillsList}
					</ul>
				</div>
			</div>
		</div>
	);

	return fullCard;
}

export default Card;
