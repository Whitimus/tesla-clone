import PropTypes from 'prop-types';
import styles from './Features.module.css';

const Features = ({
	topLeftContent,
	topRightContent,
	bottomLeftContent,
	bottomRightContent,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.panel}>
				<img src={topLeftContent} alt="Top Left" />
			</div>
			<div className={styles.panel}>
				<h5 className={styles.top_right}>{topRightContent.title}</h5>
				<p className={styles.top_right}>{topRightContent.description}</p>
			</div>
			<div className={styles.panel}>
				<h5 className={styles.bottom_left}>{bottomLeftContent.title}</h5>
				<p className={styles.bottom_left}>{bottomLeftContent.description}</p>
			</div>
			<div className={styles.panel}>
				<img src={bottomRightContent} alt="Bottom Right" />
			</div>
		</div>
	);
};

Features.propTypes = {
	topLeftContent: PropTypes.string.isRequired,
	topRightContent: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}).isRequired,
	bottomLeftContent: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}).isRequired,
	bottomRightContent: PropTypes.string.isRequired,
};

export default Features;
