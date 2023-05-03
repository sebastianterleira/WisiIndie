'use client';
import styled from 'styled-components';
import Image from 'next/image';

// const Title = styled.h1`
// 	background: var(--textRainbow);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   text-fill-color: transparent;
//   font-family: var(--font-family-inter);
//   font-style: normal;
//   font-weight: 900;
//   font-size: 64px;
//   line-height: 77px;
// `;

const Navbar = styled.header`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const NavLogoContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 9.36px;
	margin: 41px 101px 36px 118px;
`;

const NavButtonContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 9.36px;
	margin: 41px 101px 36px 118px;
`;

const LogoText = styled.p`
	background: var(--grisPrimary);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
	font-family: var(--font-family-outfit);
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 30px;
	text-align: center;
`;

const ButtonNav = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;
width: 242px;
height: 39px;
border: 1px solid #fff;
border-radius: 15px;
`

const TextButtonNav = styled.h2`
background: var(--textRainbowButton);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: var(--font-family-inter);
  font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
`

export default function App() {
	return (
		<main>
			<Navbar>
				<NavLogoContent>
					<Image
						src='./images/Logo.svg'
						alt='Logo de WiseIndie 💡'
						width={30.53}
						height={41.38}
					/>
					<LogoText>WiseIndie</LogoText>
				</NavLogoContent>
				<NavButtonContent>
					<ButtonNav>
						<TextButtonNav>WiseIndie is Open Source </TextButtonNav>
						<Image
						src='./images/ArrowRightIcon.svg'
						alt='Logo de WiseIndie 💡'
						width={19}
						height={16}
					/>
					</ButtonNav>
				</NavButtonContent>
			</Navbar>
		</main>
	);
}