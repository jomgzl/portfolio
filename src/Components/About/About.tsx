import styles from "./About.module.css";
import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

function About() {
	const [show, setShow] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<div id="about-me" className={styles.containerGeneralAbout}>
			<div
				className={`container ${styles.containerAboutMe} ${
					styles.boxAbout
				} ${show ? styles.animateAbout : ""}`}
			>
				<div className={styles.about}>
					<h1 className={styles.aboutTitle}>
						<Trans i18nKey="about-title" />
					</h1>
					<p className={styles.aboutParagraph}>
						<Trans i18nKey="about" />
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
