import styles from '../styles/Home/home.module.css';
import NavMenu from '../components/subComponents/Navbar';
import ListIdeas from '../components/ListIdeas';
import Footer from '../components/Footer';
import HomeClient from '../components/subComponents/HomeClient';

export default function App() {
	return (
		<>
			<NavMenu />
			<main className={styles.main}>
				<section className={styles.pov}>
					<HomeClient />
				</section>
				<ListIdeas />
				<Footer />
			</main>
		</>
	);
}
