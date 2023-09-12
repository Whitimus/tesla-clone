import PropTypes from 'prop-types';
import Carousel from './Carousel/Carousel'; // You'll need to create the Carousel component separately
import styles from './PerformanceSpecs.module.css'; // Import your CSS module for styling

function PerformanceSpecs({ title, paragraph, imageSrc, carouselData }) {
	return (
		<div className={styles.performance_specs}>
			<div className={styles.top_section}>
				<h2>{title}</h2>
				<p>{paragraph}</p>
				<img src={imageSrc} alt="Performance" />
			</div>
			<div className={styles.bottom_section}>
				<Carousel data={carouselData} />
			</div>
		</div>
	);
}

PerformanceSpecs.propTypes = {
	title: PropTypes.string.isRequired,
	paragraph: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	carouselData: PropTypes.array.isRequired,
};

export default PerformanceSpecs;
