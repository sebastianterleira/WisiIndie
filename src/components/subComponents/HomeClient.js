'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home/home.module.css';
import { inter, outfit } from '../../styles/fonts';
import { useEffect } from 'react';

const HomeClient = () => {
	useEffect(() => {
		if (typeof document !== 'undefined') {
			import('scrollreveal').then(ScrollReveal => {
				const sr = ScrollReveal.default();
				sr.reveal('.button-reveal', {
					duration: 1700,
					origin: 'top',
					distance: '12px',
					reset: false,
					delay: 150,
				});
				sr.reveal('.title-reveal', {
					duration: 1700,
					origin: 'top',
					distance: '12px',
					reset: false,
					delay: 170,
				});
				sr.reveal('.subtitle-reveal', {
					duration: 1700,
					origin: 'top',
					distance: '12px',
					reset: false,
					delay: 400,
				});
				sr.reveal('.buttonTryOut-reveal', {
					duration: 1700,
					origin: 'top',
					distance: '12px',
					reset: false,
					delay: 400,
				});
			});
		}
	}, []);
	return (
		<>
			<Link
				target={'_blank'}
				rel='noreferrer'
				href='https://github.com/sebastianterleira/WisiIndie'
				className={`${styles['pov__buttonOS']} ${styles['border-gradient']} button-reveal`}
			>
				<h2 className={`${styles['buttonOS__text']} ${inter.className}`}>
					WiseIndie is Open Source
				</h2>
				<Image
					src='./images/ArrowRightIcon.svg'
					alt='Logo de WiseIndie 💡'
					width={12}
					height={16}
					className={styles.icon}
				/>
			</Link>
			<h1 className={`title-reveal ${styles['pov__title']} ${inter.className}`}>
				CREATIVE AND INNOVATIVE SIDE PROJECTS
			</h1>
			<h2 className={`${styles['pov_subtitle']} subtitle-reveal`}>
				Fresh ideas to develop your skills and explore new horizons!
			</h2>
			<a
				href='#connect-listideas'
				className={`${styles['pov__buttonTO']} button buttonTryOut-reveal`}
			>
				<h2 className={`${styles['buttonTO__text']} ${outfit.className}`}>
					Try WiseIndie
				</h2>
				<Image
					src='./images/ArrowRightIcon.svg'
					alt='Logo de WiseIndie 💡'
					width={12}
					height={6}
					className={styles.icon}
				/>
			</a>
		</>
	);
};

export default HomeClient;
