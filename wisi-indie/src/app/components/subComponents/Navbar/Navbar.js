'use client';
import styled from 'styled-components';
import { useState } from 'react';
import LogoSvg from '../../AllSvgs';
import './Navbar.css';

// Styles Navbar
const Navbar = styled.header`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: center;
	align-items: center;
	background: rgba(25, 25, 25, 0.75);
	// background: rgba( 255, 255, 255, 0.1 );
	backdrop-filter: blur(30px);
	-webkit-backdrop-filter: blur(30px);
	// border: 1px solid rgba( 255, 255, 255, 0.18 );
	position: sticky;
	top: 0;
	z-index: 30;
`;

const NavLogoContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 9.36px;
	margin: 22px 101px 22px 30px;
`;

const NavButtonContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 60px;
	margin: 22px 60px 22px 118px;
`;

const LogoText = styled.p`
	font-family: 'Inter variable', sans-serif;
	font-style: normal;
	font-weight: 900;
	font-size: 30px;
	line-height: 30px;
	text-align: center;
	cursor: default;
`;

const SignIn = styled.a`
	// color: rgb(212 212 216/ 0.8);
	color: rgb(255, 255, 255);
	font-style: normal;
	font-family: var(--font-family-inter);
	line-height: 38px;
	letter-spacing: 0.3em;
	font-weight: 900;
	font-size: 16px;
	text-align: center;
	cursor: pointer;

	&:hover {
		color: rgb(178, 178, 178);
	}
`;

const StarGithub = styled.a`
	// color: rgb(212 212 216/ 0.8);
	color: rgb(255, 255, 255);
	font-style: normal;
	font-family: var(--font-family-inter);
	line-height: 38px;
	letter-spacing: 0.3em;
	font-weight: 900;
	font-size: 16px;
	text-align: center;
	cursor: pointer;

	&:hover {
		color: rgb(178, 178, 178);
	}
`;

export default function NavMenu() {
	const [fix, setFix] = useState(false);

	function setFixed() {
		if (window.scrollY >= 550 && window.scrollY <= 2210) {
			setFix(true);
		} else {
			setFix(false);
		}
	}

	window.addEventListener('scroll', setFixed);
	return (
		<Navbar className={fix ? 'navbar fixed' : 'navbar'}>
			<NavLogoContent>
				<LogoSvg fill={fix ? 'rgb(127, 127, 127)' : '#fff'} />
				<LogoText className={fix ? 'LightModeWiseIndie' : 'DarkModeWiseIndie'}>
					WiseIndie
				</LogoText>
			</NavLogoContent>
			<NavButtonContent>
				<StarGithub
					className={fix ? 'lightModeStar' : 'DarkModeStar'}
					href='https://github.com/sebastianterleira/WisiIndie'
					target={'_blank'}
					rel='noreferrer'
				>
					STAR ON GITHUB
				</StarGithub>
				<SignIn className={fix ? 'lightModeSignIn' : 'DarkModeSignIn'}>
					SING IN
				</SignIn>
			</NavButtonContent>
		</Navbar>
	);
}
