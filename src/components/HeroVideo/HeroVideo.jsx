import styles from './HeroVideo.module.css'; // Import your CSS file for styling

function HeroVideo({
	videoSource,
	title,
	subtitle,
	titleDescription,
	statText1,
	statText2,
	statText3,
	statDescription1,
	statDescription2,
	statDescription3,
	buttonText1,
	buttonText2,
	additionalText,
	underlineText,
}) {
	return (
		<div className={styles.hero_video}>
			{/* Video Background */}
			<video
				src={videoSource} // Replace with your video file path
				autoPlay
				muted
				loop
			></video>

			<div className={styles.hero_content}>
				{/* Top Third of the Screen */}
				<div className={styles.top_third}>
					<h1>{title}</h1>
					<h4>{subtitle}</h4>
					<p>{titleDescription}</p>
				</div>

				{/* Bottom Third of the Screen */}
				<div className={styles.bottom_third}>
					<div className={styles.stats}>
						<div className={styles.stats_item}>
							<h2>{statText1}</h2> <p>{statDescription1}</p>
						</div>
						<div className={styles.stats_item}>
							<h2>{statText2}</h2> <p>{statDescription2}</p>
						</div>
						<div className={styles.stats_item}>
							<h2>{statText3}</h2> <p>{statDescription3}</p>
						</div>
					</div>
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

export default HeroVideo;
