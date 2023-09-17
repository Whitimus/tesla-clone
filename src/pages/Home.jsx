import HeroVideo from '../components/HeroVideo/HeroVideo';
import ImageSection from '../components/ImageSection/ImageSection';
import Image1 from '../assets/2022-Tesla-Model-3-5.webp';
import Image2 from '../assets/modelS.webp';
import Image3 from '../assets/tesla-solar-shingle-powerwall-car.jpg';
import Video from '../assets/Model3-background.mp4';
import Footer from '../components/Footer/Footer';
export default function Home() {
	return (
		<div className="container">
			<section className="section">
				<HeroVideo
					videoSource={Video}
					title="Model 3"
					subtitle="From $29,740*"
					description="After Federal Tax Credit & Est. Gas Savings"
					buttonText1="Order Now"
					buttonText2="Demo Drive"
					additionalText="* Price before incentives and savings is $47,740, excluding taxes
							and fees. Subject to change."
					underlineText="Learn about est. gas savings."
				/>
			</section>

			{/* First ImageSection */}
			<section className="section">
				<ImageSection
					backgroundImage={Image1}
					title="Model 3"
					subtitle="From $29,740*"
					description="After Federal Tax Credit & Est. Gas Savings"
					buttonText1="Order Now"
					buttonText2="Demo Drive"
					additionalText="* Price before incentives and savings is $47,740, excluding taxes
							and fees. Subject to change."
					underlineText="Learn about est. gas savings."
				/>
			</section>

			{/* Second ImageSection... */}
			<section className="section">
				<ImageSection
					backgroundImage={Image2}
					title="Model S"
					subtitle="From $71,090*"
					description="After Federal Tax Credit & Est. Gas Savings"
					buttonText1="Order Now"
					buttonText2="Demo Drive"
					additionalText="* Price before incentives and savings is $74,990, excluding taxes
							and fees. Subject to change."
					underlineText="Learn about est. gas savings."
				/>
			</section>

			<section className="section">
				<ImageSection
					backgroundImage={Image3}
					title="Solar Roof"
					description="Produce Clean Energy From Your Roof"
					buttonText1="Order Now"
					buttonText2="Learn More"
				/>
			</section>
			<section className="section">
				<Footer />
			</section>
		</div>
	);
}
