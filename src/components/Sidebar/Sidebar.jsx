import { BiGlobe, BiUserCircle, BiX } from 'react-icons/bi';
import styles from './Sidebar.module.css';

export default function Sidebar({ showSidebar, setShowSidebar }) {
	if (!showSidebar) return null;
	return (
		<>
			<nav className={styles.sidebar}>
				<button
					className={styles.close_button}
					onClick={() => setShowSidebar(false)}
				>
					<i>
						<BiX />
					</i>
				</button>
				<ul className={styles.sidebar_list}>
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
					<li className={styles.list_item}>
						<a href={`/`}>Support</a>
					</li>
					<li className={styles.list_item}>
						<a href={`/`}>
							<i>
								<BiGlobe />
							</i>
							United States
						</a>
					</li>
					<li className={styles.list_item}>
						<a href={`/`}>
							<i>
								<BiUserCircle />
							</i>
							Account
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}
