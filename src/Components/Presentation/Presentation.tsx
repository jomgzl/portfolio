import styles from "./Presentation.module.css";
import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

function Presentation() {
	const [show, setShow] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<div className={styles.containerGeneralPresentation}>
			<div
				className={`container ${styles.containerPresentation} ${styles.boxPresentation} ${
					show ? styles.animatePresentation : ""
				}`}
			>
				<div className={styles.presentation}>
					<h1 className={styles.fullName}>Joseph Mogaizel</h1>
					<h1 className={styles.role}>
						<Trans i18nKey="role" />
					</h1>
					<div className={styles.logos}>
						<a href="https://www.linkedin.com/in/josephmogaizel/">
							<img
								className={styles.linkedinLogo}
								src="linkedIn.png"
								alt="LinkedIn"
							/>
						</a>
						<a href="https://github.com/Jomgzl">
							<img
								className={styles.githubLogo}
								src="github.png"
								alt="GitHub"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Presentation;
