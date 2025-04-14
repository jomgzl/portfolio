import styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Navbar() {
	const { t } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const handleLinkClick = () => setIsMenuOpen(false);

	return (
		<div>
			<div className={styles.mobileNavbarHeader}>
				<LanguageSwitcher />
				<nav onClick={toggleMenu}>
					<div className={styles.burgerPosition}>
						<div className={styles.burger}>
							<div
								className={`${
									isMenuOpen ? styles.barOpen : styles.bar
								}`}
							></div>
							<div
								className={`${
									isMenuOpen ? styles.barOpen : styles.bar
								}`}
							></div>
							<div
								className={`${
									isMenuOpen ? styles.barOpen : styles.bar
								}`}
							></div>
						</div>
					</div>

					<div
						className={`${styles.menuMobileNav} ${
							isMenuOpen ? styles.open : ""
						}`}
					>
						<div className={styles.burgerPosition}>
							<div className={styles.burger}>
								<div
									className={`${
										isMenuOpen ? styles.barOpen : styles.bar
									}`}
								></div>
								<div
									className={`${
										isMenuOpen ? styles.barOpen : styles.bar
									}`}
								></div>
								<div
									className={`${
										isMenuOpen ? styles.barOpen : styles.bar
									}`}
								></div>
							</div>
						</div>
						<div className={styles.burgerLinks}>
							<a
								className={styles.aboutMeBurger}
								href="#about-me"
								onClick={handleLinkClick}
							>
								{t("about-title")}
							</a>
							<a
								className={styles.skillsBurger}
								href="#skills"
								onClick={handleLinkClick}
							>
								{t("skills")}
							</a>
							<a
								className={styles.projectsBurger}
								href="#projects"
								onClick={handleLinkClick}
							>
								{t("projects-title")}
							</a>
							<a
								className={styles.workExperiencesBurger}
								href="#work-experiences"
								onClick={handleLinkClick}
							>
								{t("work-experiences-nav")}
							</a>
						</div>
					</div>
				</nav>
			</div>
			<nav className={`${styles.navbarSection1} ${styles.titles}`}>
				<LanguageSwitcher />
				<a className={styles.aboutMe} href="#about-me">
					{t("about-title")}
				</a>
				<a className={styles.skills} href="#skills">
					{t("skills")}
				</a>
				<a className={styles.projects} href="#projects">
					{t("projects-title")}
				</a>
				<a className={styles.workExperiences} href="#work-experiences">
					{t("work-experiences-nav")}
				</a>
			</nav>
		</div>
	);
}

export default Navbar;
