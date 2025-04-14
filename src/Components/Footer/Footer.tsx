import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer className={`container ${styles.footerContainer}`}>
			<p className={styles.versionCopyright}>
				v1.0.0 - © 2025 - Joseph Mogaizel
			</p>
		</footer>
	);
}

export default Footer;
