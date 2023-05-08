'use client';
import styled from 'styled-components';
import Image from 'next/image';
import NavMenu from './components/subComponents/Navbar';
import ListIdeas from './components/ListIdeas';
import Footer from './components/Footer';

const Wrapper = styled.main`
	min-height: 100vh;
	background-color: #000;
`;

// Styles POV
const ContentPov = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 126px 210px;
`;

const ButtonOpenSource = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 10px;
	gap: 14px;
	width: 229px;
	height: 34px;
	border-radius: 15px;
	text-decoration: none;
	border: 1px solid #b2b2b2;
	margin: 0 0 13px 0;
	justify-content: center;

	&:hover {
		.transitionColorText {
			background-image: var(--textReversedRainbowButton);
		}
		.right-arrow {
			transform: translate(3px);
		}
	}
`;

const TextButtonOpenSource = styled.h2`
	background-image: var(--textRainbowButton);
	background-color: #fff;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	font-family: var(--font-family-inter);
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 19px;
	text-align: center;
`;
const Title = styled.h1`
	background-image: var(--textRainbow);
	background-color: #fff;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
	font-family: var(--font-family-inter);
	font-style: normal;
	font-weight: 900;
	font-size: 64px;
	line-height: 77px;
	text-align: center;
	letter-spacing: -3px;
`;

const Subtitle = styled.h2`
	background-image: var(--grisPrimary);
	background-color: #fff;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	margin: 16px 0 0 0;
`;

const ButtonTryOut = styled.a`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 7px 20px;
	gap: 10px;
	width: 191px;
	height: 39px;
	background: linear-gradient(
		90deg,
		rgba(228, 228, 231, 0) -110.04%,
		#e4e4e7 53.83%,
		rgba(255, 255, 255, 0) 180.85%
	);

	border-radius: 5px;
	text-decoration: none;
	margin: 29px 0 0 0;
	transition: background, filter 0.2s ease-in-out;

	&:hover {
		background: #e4e4e7;
		filter: drop-shadow(-4px -4px 10px rgba(255, 255, 255, 0.1))
			drop-shadow(4px 4px 10px rgba(255, 255, 255, 0.1));
		.right-arrow {
			transform: translate(3px);
		}
	}
`;

const TryWisiIndie = styled.h2`
	background-image: var(--grisButton);
	background-color: #fff;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	font-family: var(--font-family-outfit);
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 25px;
	text-align: center;
`;

export default function App() {
	return (
		<Wrapper>
			<NavMenu/>
			<ContentPov>
				<ButtonOpenSource
					target='_blank'
					href='https://github.com/sebastianterleira/WisiIndie'
					className='borderGrandient'
				>
					<TextButtonOpenSource className='transitionColorText'>
						WiseIndie is Open Source
					</TextButtonOpenSource>
					<Image
						src='./images/ArrowRightIcon.svg'
						alt='Logo de WiseIndie 💡'
						width={12}
						height={16}
						className='right-arrow'
					/>
				</ButtonOpenSource>
				<Title>CREATIVE AND INNOVATIVE SIDE PROJECTS</Title>
				<Subtitle>
					Fresh ideas to develop your skills and explore new horizons!
				</Subtitle>
				<ButtonTryOut
					target='_blank'
					href='https://github.com/sebastianterleira/WisiIndie'
					className='button'
				>
					<TryWisiIndie>Try WiseIndie</TryWisiIndie>
					<Image
						src='./images/ArrowRightIcon.svg'
						alt='Logo de WiseIndie 💡'
						width={12}
						height={6}
						className='right-arrow'
					/>
				</ButtonTryOut>
			</ContentPov>
			<ListIdeas/>
			<Footer/>
		</Wrapper>
	);
}
