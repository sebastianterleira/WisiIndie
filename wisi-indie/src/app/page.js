'use client';
import styles from '../styles/Home/home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import NavMenu from '../components/subComponents/Navbar';
import ListIdeas from '../components/ListIdeas';
import Footer from '../components/Footer';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const sr = ScrollReveal({
	duration: 2500,
	delay: 200,
	distance: '50px',
	origin: 'bottom',
	reset: false,
});

const revealElement = (selector, options) => {
	sr.reveal(selector, options);
};

export default function App() {
	useEffect(() => {
		revealElement('.button-reveal', {
			duration: 1700,
			origin: 'top',
			distance: '12px',
			reset: false,
			delay: 150,
		});
		revealElement('.title-reveal', {
			duration: 1700,
			origin: 'top',
			distance: '12px',
			reset: false,
			delay: 170,
		});
		revealElement('.subtitle-reveal', {
			duration: 1700,
			origin: 'top',
			distance: '12px',
			reset: false,
			delay: 400,
		});
		revealElement('.buttonTryOut-reveal', {
			duration: 1700,
			origin: 'top',
			distance: '12px',
			reset: false,
			delay: 400,
		});
	}, []);
	return (
		<main className={styles.main}>
			<NavMenu />
			<section className={styles.pov}>
				<Link
					target={'_blank'}
					rel='noreferrer'
					href='https://github.com/sebastianterleira/WisiIndie'
					className={`${styles['pov__buttonOS']} ${styles['border-gradient']} button-reveal`}
				>
					<h2 className={styles['buttonOS__text']}>WiseIndie is Open Source</h2>
					<Image
						src='./images/ArrowRightIcon.svg'
						alt='Logo de WiseIndie 💡'
						width={12}
						height={16}
						className={styles.icon}
					/>
				</Link>
				<h1 className={`title-reveal ${styles['pov__title']}`}>
					CREATIVE AND INNOVATIVE SIDE PROJECTS
				</h1>
				<h2 className={`${styles['pov_subtitle']} subtitle-reveal`}>
					Fresh ideas to develop your skills and explore new horizons!
				</h2>
				<a
					href='#connect-listideas'
					className={`${styles['pov__buttonTO']} button buttonTryOut-reveal`}
				>
					<h2 className={styles['buttonTO__text']}>Try WiseIndie</h2>
					<Image
						src='./images/ArrowRightIcon.svg'
						alt='Logo de WiseIndie 💡'
						width={12}
						height={6}
						className={styles.icon}
					/>
				</a>
			</section>
			<ListIdeas />
			<Footer />
		</main>
	);
}
