import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.css';

function Carousel({ data }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPanel1Visible, setIsPanel1Visible] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIsPanel1Visible((prevIsPanel1Visible) => !prevIsPanel1Visible);
		}, 3000);

		return () => {
			clearInterval(intervalId); // Cleanup the interval on component unmount
		};
	}, []);

	const togglePanel = () => {
		setIsPanel1Visible((prevIsPanel1Visible) => !prevIsPanel1Visible);
	};

	return (
		<div className={styles.carousel}>
			<div className={styles.panelContainer}>
				<div
					className={`${styles.panel} ${isPanel1Visible ? '' : styles.faded}`}
					onClick={togglePanel}
				>
					<h3>{data[currentIndex].title}</h3>
					<p>{data[currentIndex].description}</p>
					<div className={styles.stats}>
						<div className={styles.stats_item}>
							<h2>{data[currentIndex].stats1}</h2>{' '}
							<p>{data[currentIndex].statDescription1}</p>
						</div>
						<div className={styles.stats_item}>
							<h2>{data[currentIndex].stats2}</h2>{' '}
							<p>{data[currentIndex].statDescription2}</p>
						</div>
						<div className={styles.stats_item}>
							<h2>{data[currentIndex].stats3}</h2>{' '}
							<p>{data[currentIndex].statDescription3}</p>
						</div>
					</div>
				</div>
				<div
					className={`${styles.panel} ${isPanel1Visible ? styles.faded : ''}`}
					onClick={togglePanel}
				>
					<h3>{data[(currentIndex + 1) % data.length].title}</h3>
					<p>{data[(currentIndex + 1) % data.length].description}</p>
					<div className={styles.stats}>
						<div className={styles.stats_item}>
							<h2>{data[currentIndex].stats1}</h2>{' '}
							<p>{data[currentIndex].statDescription1}</p>
						</div>
						<div className={styles.stats_item}>
							<h2>{data[currentIndex].stats2}</h2>{' '}
							<p>{data[currentIndex].statDescription2}</p>
						</div>
						<div className={styles.stats_item}>
							<h2>{data[currentIndex].stats3}</h2>{' '}
							<p>{data[currentIndex].statDescription3}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Carousel.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			stats: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Carousel;
