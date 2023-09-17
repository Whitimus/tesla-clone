import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.footerList}>
				<li>Tesla © 2023</li>
				<li>Privacy & Legal</li>
				<li>Vehicle Recalls</li>
				<li>Contact</li>
				<li>News</li>
				<li>Get Updates</li>
				<li>Locations</li>
			</ul>
		</footer>
	);
};

export default Footer;
