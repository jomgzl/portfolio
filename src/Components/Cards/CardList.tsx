import Card from "./Card.tsx";
import styles from "./CardList.module.css";
import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

interface Skill {
	name: string;
	logo: string;
}

interface Data {
	id: number;
	heading: string;
	logo: string;
	skills: Skill[];
}

interface Props {
	listOfSkills: Data[];
}

function CardList({ listOfSkills }: Props) {
	const [show, setShow] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<div id="skills" className={styles.containerGeneralSkills}>
			<div
				className={`container ${styles.containerCardList} ${
					styles.boxCardList
				} ${show ? styles.animateCardList : ""}`}
			>
				<h1 className={styles.skillsTitle}>
					<Trans i18nKey="skills" />
				</h1>
				<div className={styles.cards}>
					{listOfSkills.map((data) => (
						<Card key={data.id} {...data}></Card>
					))}
				</div>
			</div>
		</div>
	);
}

export default CardList;
