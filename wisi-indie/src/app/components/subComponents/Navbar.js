'use client';
import styled from 'styled-components';
import Image from 'next/image';

// Styles Navbar
const Navbar = styled.header`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: center;
	align-items: center;
`;

const NavLogoContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 9.36px;
	margin: 22px 101px 22px 130px;
`;

const NavButtonContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 9.36px;
	margin: 22px 130px 22px 118px;
`;

const LogoText = styled.p`
	background-image: var(--grisPrimary);
	background-color: #fff;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
	font-family: "Inter variable", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 30px;
	text-align: center;
	`;
	
	const SignIn = styled.a`
	color: rgb(212 212 216/ .8);
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
  cursor: pointer;
	
	&:hover {
		color: #fff;
	}
`;

export default function NavMenu() {
	return (
		<>
			<Navbar>
				<NavLogoContent>
					<Image
						src='./images/Logo.svg'
						alt='Logo de WiseIndie 💡'
						width={29.53}
						height={39.38}
						className='IconLogo'
					/>
					<LogoText>WiseIndie</LogoText>
				</NavLogoContent>
				<NavButtonContent>
					<SignIn className='transitionSingIn'>Sign in</SignIn>
				</NavButtonContent>
			</Navbar>
		</>
	);
}
