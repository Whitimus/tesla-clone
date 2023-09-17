import Header from '../components/Header/Header';
import Logo from '../assets/Tesla_Cybertruck-Logo.wine.png';

import Image1 from '../assets/cyber.webp';
import Image2 from '../assets/Tesla-Cybertruck-26-Carscoops267-1.jpg';
import Image3 from '../assets/tesla-cybertruck-interior.webp';
import Image4 from '../assets/cybertruck-2-1574440578.png';
import ImageSection from '../components/ImageSection/ImageSection';
import ImageFade from '../components/ImageFade/ImageFade';
import Footer from '../components/Footer/Footer';

export default function Cybertruck() {
	return (
		<div className="container">
			<section className="section">
				<ImageSection
					backgroundImage={Image1}
					logo={Logo}
					buttonText1="ORDER NOW"
					buttonText2="DEMO DRIVE"
				/>
			</section>
			<section className="section normal_scroll">
				<ImageFade backgroundImage={Image2} title="EXOSKELETON" />
			</section>

			<section className="section normal_scroll">
				<ImageFade backgroundImage={Image3} title="Interior of the Future" />
			</section>

			<section className="section normal_scroll">
				<ImageFade
					backgroundImage={Image4}
					title="PERFORMANCE AND EFFICIENCY"
				/>
			</section>
			<section className="section">
				<Footer />
			</section>
		</div>
	);
}
