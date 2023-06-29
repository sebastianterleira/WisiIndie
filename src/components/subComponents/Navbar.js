'use client';
import styles from '../../styles/Navbar/navbar.module.css';
import { useLayoutEffect, useState } from 'react';
import { LogoSvg } from '../AllSvgs';
import { supabase } from '../../../supabase/client';

export default function NavMenu() {
	const [fix, setFix] = useState(false);
	const [user, setUser] = useState(null);

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
					<a
						onClick={() => supabase.auth.signOut()}
						className={
							fix
								? `${styles.lightModeSignIn} ${styles['content__buttons-singout']}`
								: `${styles.DarkModeSignIn} ${styles['content__buttons-singout']}`
						}
					>
						SING OUT
					</a>
				) : (
					<>
						<a
							href='/signin'
							className={
								fix
									? `${styles['content__buttons-singin']} ${styles.lightModeSignIn}`
									: `${styles.DarkModeSignIn} ${styles['content__buttons-singin']}`
							}
						>
							SIGN IN
						</a>
						<a
							href='/signup'
							className={
								fix
									? `${styles.lightModeSignIn} ${styles['content__buttons-singup']}`
									: `${styles.DarkModeSignIn} ${styles['content__buttons-singup']}`
							}
						>
							SIGN UP
						</a>
					</>
				)}
			</div>
		</header>
	);
}
