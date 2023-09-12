import { useInView } from 'react-intersection-observer';

import styles from './ImageFade.module.css'; // Import the CSS module

function ImageFade({ backgroundImage, videoSource, title, whiteTitle }) {
	const [ref, inView] = useInView({
		triggerOnce: true, // Trigger the effect only once
		threshold: 0.2, // Adjust the threshold as needed
	});

	return (
		<div
			className={`${styles['fading-component']} ${
				inView ? styles['fade-in'] : ''
			}`}
			ref={ref}
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<video
				src={videoSource} // Replace with your video file path
				autoPlay
				muted
				loop
			></video>
			<h2 className={styles.dark_text}>{title}</h2>
			<h2 className={styles.light_text}>{whiteTitle}</h2>
		</div>
	);
}

export default ImageFade;
