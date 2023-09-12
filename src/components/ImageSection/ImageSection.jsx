import PropTypes from 'prop-types';

import styles from './ImageSection.module.css';

function ImageSection({
	backgroundImage,
	title,
	subtitle,
	description,
	buttonText1,
	buttonText2,
	additionalText,
	underlineText,
}) {
	return (
		<div
			className={styles.image_section}
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className={styles.image_content}>
				<div className={styles.top_third}>
					<h1>{title}</h1>
					<h4>{subtitle}</h4>
					<p>{description}</p>
				</div>
				<div className={styles.bottom_third}>
					<div className={styles.button_container}>
						<button className={styles.order_now}>{buttonText1}</button>
						<button className={styles.demo_drive}>{buttonText2}</button>
					</div>
					<div className={styles.paragraph_container}>
						<p>{additionalText}</p>
						<p className={styles.underline}>{underlineText}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

ImageSection.propTypes = {
	backgroundImage: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	buttonText1: PropTypes.string.isRequired,
	buttonText2: PropTypes.string.isRequired,
	additionalText: PropTypes.string.isRequired,
};

export default ImageSection;
