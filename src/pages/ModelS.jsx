import HeroVideo from '../components/HeroVideo/HeroVideo';
import ImageSection from '../components/ImageSection/ImageSection';
import Image1 from '../assets/2021-Tesla-Model-S-Plaid-4.webp';
import Video from '../assets/Home.mp4';
import Video2 from '../assets/3d-model.mp4';
import Image2 from '../assets/tesla-s.jpg';
import Image3 from '../assets/MS-Performance.jpg';
import ImageFade from '../components/ImageFade/ImageFade';
import PerformanceSpecs from '../components/PerformanceSpecs/PerformanceSpecs';

export default function ModelS() {
	const carouselData = [
		{
			title: 'Model S',
			description:
				'Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.',
			stats1: '3.1 s',
			stats2: '405 mi',
			stats3: '670 hp',
			statDescription1: '0-60 mph',
			statDescription2: 'Range (EPA est.)',
			statDescription3: 'Peak Power',
		},
		{
			title: 'Model S Plaid',
			description:
				'Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.',
			stats1: '1.99 s',
			stats2: '396 mi',
			stats3: '1020 hp',
			statDescription1: '0-60 mph',
			statDescription2: 'Range (EPA est.)',
			statDescription3: 'Peak Power',
		},
	];
	return (
		<div className="container">
			<section className="section">
				<HeroVideo
					videoSource={Video}
					title="Model S"
					subtitle="From $71,090*"
					description="After Federal Tax Credit & Est. Gas Savings"
					statText1="396mi"
					statText2="1.99s"
					statText3="200 mph"
					statDescription1="Range (EPA est.)"
					statDescription2="0-60 mph*"
					statDescription3="Top Speed†"
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
					title="Plaid"
					subtitle="Beyond Ludicrous"
					buttonText1="Order Now"
					buttonText2="Demo Drive"
				/>
			</section>
			<section className="section">
				<ImageFade backgroundImage={Image2} title="Interior of the Future" />
			</section>
			<section className="section">
				<ImageFade videoSource={Video2} whiteTitle="Supercharger" />
			</section>
			<section className="section normal_scroll">
				<PerformanceSpecs
					title="Electric Powertrain"
					paragraph="Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.."
					imageSrc={Image3}
					carouselData={carouselData}
				/>
			</section>
		</div>
	);
}
