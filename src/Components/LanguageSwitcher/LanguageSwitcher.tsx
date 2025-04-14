import styles from "./LanguageSwitcher.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	};

	const [enIsClicked, setEnIsClicked] = useState(false);
	const [frIsClicked, setFrIsClicked] = useState(false);

	return (
		<div className={styles.languageSwitcher}>
			<button
				className={`${styles.languageButtons} ${
					enIsClicked && !frIsClicked ? styles.languageButtonClicked : ""
				}`}
				onClick={() => {
					changeLanguage("en");
					setEnIsClicked(true);
					setFrIsClicked(false);
				}}
			>
				EN
			</button>
			<button
				className={`${styles.languageButtons} ${
					frIsClicked ? styles.languageButtonClicked : ""
				}`}
				onClick={() => {
					changeLanguage("fr");
					setFrIsClicked(true);
					setEnIsClicked(false);
				}}
			>
				FR
			</button>
		</div>
	);
};

export default LanguageSwitcher;
