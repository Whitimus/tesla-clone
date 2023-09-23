import HeroVideo from '../components/HeroVideo/HeroVideo';
import ImageSection from '../components/ImageSection/ImageSection';
import Image1 from '../assets/Model-x.jpg';
import Video from '../assets/ModelX.mp4';

import Image2 from '../assets/2021-Tesla-Model-S-interior.webp';
import Image3 from '../assets/MS-Performance.jpg';
import Image4 from '../assets/Model-X-Interior.jpg';
import Image5 from '../assets/2023-tesla-model-x-top-view-carbuzz-814196.jpg';

import ImageFade from '../components/ImageFade/ImageFade';
import PerformanceSpecs from '../components/PerformanceSpecs/PerformanceSpecs';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';

export default function ModelX() {
	const carouselData = [
		{
			title: 'Model X',
			description:
				'Dual Motor All-Wheel Drive platform has the longest range, and now delivers insane power and acceleration.',
			stats1: '3.8 s',
			stats2: '348 mi',
			stats3: '670 hp',
			statDescription1: '0-60 mph',
			statDescription2: 'Range (EPA est.)',
			statDescription3: 'Peak Power',
		},
		{
			title: 'Model X Plaid',
			description:
				'Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each with a carbon-sleeved rotor that maintains 1,000+ horsepower all the way to top speed.',
			stats1: '2.5 s',
			stats2: '333 mi',
			stats3: '1020 hp',
			statDescription1: '0-60 mph',
			statDescription2: 'Range (EPA est.)',
			statDescription3: 'Peak Power',
		},
	];
	const topRightContent = {
		title: 'Stay Connected',
		description:
			'Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.',
	};
	const bottomLeftContent = {
		title: 'Sublime Sound',
		description:
			'A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.',
	};
	return (
		<div className="container">
			<section className="section">
				<HeroVideo
					videoSource={Video}
					title="Model X"
					subtitle="From $68,590*"
					description="After Federal Tax Credit & Est. Gas Savings"
					statText1="333mi"
					statText2="2.5s"
					statText3="1020hp"
					statDescription1="Range (EPA est.)"
					statDescription2="0-60 mph*"
					statDescription3="Peak Power"
					buttonText1="Order Now"
					buttonText2="Demo Drive"
					additionalText="* Price before incentives and savings is $79,990, excluding taxes
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
			<section className="section normal_scroll">
				<ImageFade backgroundImage={Image2} title="Interior of the Future" />
			</section>
			<section className="section">
				<Features
					topLeftContent={Image4}
					topRightContent={topRightContent}
					bottomLeftContent={bottomLeftContent}
					bottomRightContent={Image5}
				/>
			</section>
			<section className="section normal_scroll">
				<PerformanceSpecs
					title="Electric Powertrain"
					paragraph="Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.."
					imageSrc={Image3}
					carouselData={carouselData}
				/>
			</section>
			<section className="section">
				<Footer />
			</section>
		</div>
	);
}
