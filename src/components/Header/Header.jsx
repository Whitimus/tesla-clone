import TeslaLogo from '../../assets/tesla-logo.svg';
import { BiGlobe, BiHelpCircle, BiUserCircle } from 'react-icons/bi';
import styles from './Header.module.css';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';

export default function Header() {
	// Initialize showSidebar state variable and its setter function
	const [showSidebar, setShowSidebar] = useState(false);

	// Handle click event for opening the sidebar
	const handleOpenSidebar = () => {
		setShowSidebar(true);
	};

	return (
		<header>
			<nav className={styles.desktop_nav}>
				<div className={styles.nav_container}>
					<a href={`/`}>
						<img className={styles.logo} src={TeslaLogo} alt="Tesla" />
					</a>

					<ul className={styles.list}>
						<li className={styles.list_item}>
							<a href={`/model_s`}>Model S</a>{' '}
						</li>
						<li className={styles.list_item}>
							<a href={`/model_x`}>Model X</a>
						</li>
						<li className={styles.list_item}>
							<a href={`/cybertruck`}>Cybertruck</a>
						</li>
						<li className={styles.list_item}>
							<a href={`/`}>Energy</a>
						</li>
						<li className={styles.list_item}>
							<a href={`/`}>Charging</a>
						</li>
						<li className={styles.list_item}>
							<a href={`/`}>Discover</a>
						</li>
						<li className={styles.list_item}>
							<a href={`/`}>Shop</a>
						</li>
					</ul>

					<div className={styles.profile_container}>
						<button>
							<i className={styles.icon}>
								{' '}
								<BiHelpCircle size={25} />
							</i>
						</button>

						<button>
							<i className={styles.icon}>
								<BiGlobe size={25} />
							</i>
						</button>

						<button>
							<i className={styles.icon}>
								<BiUserCircle size={25} />
							</i>
						</button>
					</div>
				</div>
				<button className={styles.menu} onClick={handleOpenSidebar}>
					Menu
				</button>
			</nav>
			<Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
		</header>
	);
}
