import styles from '../styles/Home/home.module.css';
import NavMenu from '../components/subComponents/Navbar';
import ListIdeas from '../components/ListIdeas';
import Footer from '../components/Footer';
import HomeClient from '../components/subComponents/HomeClient';
import { metadata } from './layout';
import { Head } from 'next/document';

export default function App() {
	return (
		<>
			<Head>
				<meta property='og:image' content={metadata.image} />
			</Head>
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
