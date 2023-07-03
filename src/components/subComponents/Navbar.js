'use client';
import styles from '../../styles/Navbar/navbar.module.css';
import { useLayoutEffect, useState } from 'react';
import { LogoSvg } from '../AllSvgs';
import { supabase } from '../../../supabase/client';
import { HiMenu } from 'react-icons/hi';
import Link from 'next/link';

export default function NavMenu() {
	const [fix, setFix] = useState(false);
	const [user, setUser] = useState(null);
	const [menuHamburguesa, setMenuHamburguesa] = useState(false);

	function setFixed() {
		if (window.scrollY >= 550 && window.scrollY <= 2210) {
			setFix(true);
		} else {
			setFix(false);
		}
	}

	window.addEventListener('scroll', setFixed);

	useLayoutEffect(() => {
		const userLocalStorage = localStorage.getItem(
			'sb-rirpcujqedgvcbphnvvz-auth-token'
		);

		supabase.auth.onAuthStateChange(event => {
			if (event === 'SIGNED_OUT') {
				window.location.href = '/';
			}
			console.log(event);
		});

		// eslint-disable-next-line no-unused-expressions
		userLocalStorage ? setUser(userLocalStorage) : null;
	}, []);

	return (
		<>
			<header
				className={
					fix
						? `${styles.navbar} ${styles.fixed} ${styles.nav}`
						: `${styles.nav} ${styles.navbar}`
				}
			>
				<div className={styles['nav__content-logo']}>
					<LogoSvg fill={fix ? 'rgb(127, 127, 127)' : '#fff'} />
					<p
						className={
							fix
								? `${styles.LightModeWiseIndie} ${styles['content__logo-text']}`
								: `${styles.DarkModeWiseIndie} ${styles['content__logo-text']}`
						}
					>
						WiseIndie
					</p>
				</div>
				<div className={styles['content__hamburguesa']}>
					<HiMenu
						className={
							fix
								? `${styles['hamburguesa__icon']} ${styles.LightModeWiseIndie}`
								: `${styles['hamburguesa__icon']} ${styles.DarkModeWiseIndie}`
						}
						onClick={() => setMenuHamburguesa(true)}
					/>
				</div>

				<div className={styles['nav__content-buttons']}>
					<a
						className={
							fix
								? `${styles.lightModeStar} ${styles['content__buttons-star-github']}`
								: `${styles.DarkModeStar} ${styles['content__buttons-star-github']}`
						}
						href='https://github.com/sebastianterleira/WisiIndie'
						target={'_blank'}
						rel='noreferrer'
					>
						STAR ON GITHUB
					</a>
					{user !== null ? (
						<p
							onClick={() => supabase.auth.signOut()}
							className={
								fix
									? `${styles.lightModeSignIn} ${styles['content__buttons-singout']}`
									: `${styles.DarkModeSignIn} ${styles['content__buttons-singout']}`
							}
						>
							SING OUT
						</p>
					) : (
						<>
							<Link
								href='/signin'
								className={
									fix
										? `${styles['content__buttons-singin']} ${styles.lightModeSignIn}`
										: `${styles.DarkModeSignIn} ${styles['content__buttons-singin']}`
								}
							>
								SIGN IN
							</Link>
							<Link
								href='/signup'
								className={
									fix
										? `${styles.lightModeSignIn} ${styles['content__buttons-singup']}`
										: `${styles.DarkModeSignIn} ${styles['content__buttons-singup']}`
								}
							>
								SIGN UP
							</Link>
						</>
					)}
				</div>
			</header>
			{menuHamburguesa && (
				<div className={styles['menu']}>
					<div className={styles['menu__content']}>
						<div className={styles['content__box-header']}>
							<div
								className={styles['box__icon']}
								onClick={() => setMenuHamburguesa(false)}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='30'
									fill={'rgb(255, 255, 255)'}
									viewBox='0 0 16 16'
								>
									<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
								</svg>
							</div>
							<div className={styles['box__logo']}>
								<LogoSvg fill={'#fff'} />
								<p className={styles['content__logo-text']}>WiseIndie</p>
							</div>
						</div>
						<div className={styles['content__box-content']}>
							{user !== null ? (
								<nav className={styles['box__content']}>
									<p
										onClick={() => supabase.auth.signOut()}
										className={styles['box__signout']}
									>
										SING OUT
									</p>
									<a
										href='https://github.com/sebastianterleira/WisiIndie'
										className={styles['box__GH']}
										target={'_blank'}
										rel='noreferrer'
									>
										START ON GITHUB
									</a>
								</nav>
							) : (
								<nav className={styles['box__content']}>
									<Link href='/signin' className={styles['box__signin']}>
										SIGN IN
									</Link>
									<Link href='/signup' className={styles['box__signup']}>
										SING UP
									</Link>
									<a
										href='https://github.com/sebastianterleira/WisiIndie'
										className={styles['box__GH']}
										target={'_blank'}
										rel='noreferrer'
									>
										START ON GITHUB
									</a>
								</nav>
							)}
							<hr className={styles.line}></hr>
							<nav className={styles['box__content']}>
								<a
									target={'_blank'}
									rel='noreferrer'
									href='https://github.com/sebastianterleira/WisiIndie'
								>
									<div className={styles['content__link']}>
										<p className={styles['box__signup']}>GITHUB</p>
										<svg
											width='19'
											height='18'
											viewBox='0 0 19 18'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M9.5 0C8.25244 0 7.0171 0.238571 5.86451 0.702093C4.71191 1.16561 3.66464 1.84501 2.78249 2.70148C1.00089 4.43121 0 6.77723 0 9.22344C0 13.3002 2.7265 16.759 6.498 17.9857C6.973 18.0595 7.125 17.7736 7.125 17.5245V15.9658C4.4935 16.5192 3.933 14.7298 3.933 14.7298C3.496 13.6599 2.8785 13.374 2.8785 13.374C2.014 12.8021 2.945 12.8206 2.945 12.8206C3.895 12.8851 4.3985 13.7706 4.3985 13.7706C5.225 15.1726 6.6215 14.7575 7.163 14.5361C7.2485 13.9366 7.4955 13.5308 7.7615 13.3002C5.6525 13.0696 3.439 12.2764 3.439 8.76227C3.439 7.73847 3.8 6.91758 4.4175 6.26272C4.3225 6.03213 3.99 5.07289 4.5125 3.82773C4.5125 3.82773 5.3105 3.5787 7.125 4.76852C7.8755 4.5656 8.6925 4.46415 9.5 4.46415C10.3075 4.46415 11.1245 4.5656 11.875 4.76852C13.6895 3.5787 14.4875 3.82773 14.4875 3.82773C15.01 5.07289 14.6775 6.03213 14.5825 6.26272C15.2 6.91758 15.561 7.73847 15.561 8.76227C15.561 12.2856 13.338 13.0604 11.2195 13.291C11.5615 13.5769 11.875 14.1395 11.875 14.9973V17.5245C11.875 17.7736 12.027 18.0687 12.5115 17.9857C16.283 16.7498 19 13.3002 19 9.22344C19 8.0122 18.7543 6.81282 18.2769 5.69378C17.7994 4.57474 17.0997 3.55796 16.2175 2.70148C15.3354 1.84501 14.2881 1.16561 13.1355 0.702093C11.9829 0.238571 10.7476 0 9.5 0Z'
												fill='rgb(255, 255, 255)'
											/>
										</svg>
									</div>
								</a>
								<a
									target={'_blank'}
									rel='noreferrer'
									href='https://github.com/sebastianterleira/WisiIndie'
								>
									<div className={styles['content__link']}>
										<p className={styles['box__signup']}>TWITTER</p>
										<svg
											width='20'
											height='16'
											viewBox='0 0 20 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M19.54 1.88235C18.8407 2.21176 18.0869 2.42824 17.3058 2.53176C18.105 2.03294 18.7226 1.24235 19.0133 0.291765C18.2594 0.762353 17.4239 1.09176 16.5429 1.28C15.8254 0.470588 14.8173 0 13.6729 0C11.5386 0 9.79482 1.80706 9.79482 4.03765C9.79482 4.35765 9.83115 4.66824 9.89472 4.96C6.66146 4.79059 3.78239 3.18118 1.86604 0.743529C1.53 1.33647 1.33927 2.03294 1.33927 2.76706C1.33927 4.16941 2.02044 5.41176 3.07398 6.11765C2.42914 6.11765 1.82971 5.92941 1.30295 5.64706V5.67529C1.30295 7.63294 2.64711 9.27059 4.42723 9.63765C3.85571 9.79973 3.25571 9.82228 2.67436 9.70353C2.92104 10.5059 3.40415 11.2079 4.05578 11.711C4.70741 12.2141 5.4948 12.4929 6.30725 12.5082C4.93005 13.6381 3.22292 14.2488 1.46643 14.24C1.15763 14.24 0.848835 14.2212 0.540039 14.1835C2.26566 15.3318 4.31824 16 6.51614 16C13.6729 16 17.6055 9.84471 17.6055 4.50824C17.6055 4.32941 17.6055 4.16 17.5964 3.98118C18.3594 3.41647 19.0133 2.70118 19.54 1.88235Z'
												fill='rgb(255, 255, 255)'
											/>
										</svg>
									</div>
								</a>
							</nav>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
