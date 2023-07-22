'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer/footer.module.css';
import Laptop from '../assets/laptopClosed.png';
import Modal from './subComponents/Modal';
import { outfit, inter } from '../styles/fonts';

const Footer = () => {
	const [showModal, setShowModal] = useState(false);

	const handleCloseModal = () => {
		setShowModal(false);
		document.body.classList.remove('modal-open');
	};

	const handleOpenModal = () => {
		setShowModal(true);
		document.body.classList.add('modal-open');
	};

	return (
		<>
			<div className={styles['pov__container']}>
				<h1 className={`${styles['pov__title']} ${inter.className}`}>
					Now it’s easier to start a new project
				</h1>
				<a href='#connect-listideas' className={styles['pov__buttonTO']}>
					<h2 className={`${styles['buttonTO__text']} ${outfit.className}`}>
						Try WiseIndie
					</h2>
					<Image
						src='./images/ArrowRightIcon.svg'
						alt='Icono de flecha invertida a la derecha'
						width={12}
						height={6}
						className={styles.icon}
					/>
				</a>
				<Image
					src={Laptop}
					alt='Laptop Closed Off'
					className={styles['laptop__imagen']}
				/>
			</div>
			<footer className={styles.footer}>
				<div className={styles['footer__container']}>
					<div className={styles['footer__logo-content']}>
						<Image
							src='./images/LogoFooter.svg'
							alt='Logo de WiseIndie 💡'
							width={15}
							height={25}
							className={styles['footer__logo-icon']}
						/>
						<h2 className={styles['footer__logo-text']}>
							A product by team WisiIndi © 2023
						</h2>
					</div>
					<div className={styles['footer__links']}>
						<Link
							target={'_blank'}
							rel='noreferrer'
							href='https://github.com/sebastianterleira/WisiIndie'
							className={`${styles['links__updated']}`}
						>
							Updates
						</Link>
						<a className={styles['links__contact']} onClick={handleOpenModal}>
							Contact us
						</a>
						<a
							className={styles['links__wrapper']}
							target={'_blank'}
							rel='noreferrer'
							href='https://github.com/sebastianterleira/WisiIndie'
						>
							<Image
								src='./images/GithubIcon.svg'
								alt='Icono de Github'
								width={20}
								height={18}
								className={styles['links__github']}
							/>
						</a>
						<a
							className={styles['links__wrapper']}
							target={'_blank'}
							rel='noreferrer'
							href='https://github.com/sebastianterleira/WisiIndie'
						>
							<Image
								src='./images/TwitterIcon.svg'
								alt='Icono de Twitter'
								width={20}
								height={18}
								className={styles['links__twitter']}
							/>
						</a>
					</div>
				</div>
			</footer>
			{showModal && (
				<Modal
					width='md'
					height='md'
					fill='#ffffff'
					background='dark'
					onClose={handleCloseModal}
				>
					<div className={styles['modal__content-title']}>
						<h1 className={styles['content__title']}>Contact us</h1>
					</div>
					<div className={styles['modal__content-team']}>
						<div className={styles['content__team']}>
							<div className={styles['content__team-text']}>Collaborator</div>
							<div className={styles['content__team-email']}>
								seb.terleira1204@gmail.com
							</div>
						</div>
						<div className={styles['content__team']}>
							<div className={styles['content__team-text']}>Collaborator</div>
							<div className={styles['content__team-email']}>
								josecamilo1902@outlook.com
							</div>
						</div>
						<div className={styles['content__team']}>
							<div className={styles['content__team-text']}>Collaborator</div>
							<div className={styles['content__team-email']}>
								hesz.bruno05@gmail.com
							</div>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
};

export default Footer;
