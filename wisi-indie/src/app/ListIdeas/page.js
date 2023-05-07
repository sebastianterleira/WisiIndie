'use client';
import { Data } from '../data/fakeData';
import CardIdea from '../components/CardIdea';
import styled from 'styled-components';

const Wrapper = styled.div`
	min-height: 100vh;
	padding-top: 12.5rem;
	padding-bottom: 12.5rem;
	background-color: rgb(255, 255, 255);
`;

const BackgroundContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	border-radius: 30px;
	width: 1100px;
	height: 600px;
	background: #e8e8e8;
	// border: 1px solid #e8e8e8;
	// // box-shadow: 20px 20px 40px #bebebe, -20px -20px 40px #ffffff;
	// box-shadow: 6px 6px 20px #c5c5c5, -6px -6px 40px #ffffff;
	background: #d2dbee;
	border-radius: 30px;
	box-shadow: inset 9.91px 9.91px 15px #bfc7d9,
		inset -9.91px -9.91px 15px #e5efff;
`;

const ContentTitle = styled.div`
	display: flex;
	align-items: center;
	max-width: 730px;
	margin: 0px auto;
	display: block;
	padding: 0px 3rem;
`;

const Title = styled.h2`
	margin-bottom: 1.5rem;
	color: rgb(51, 51, 51);
	font-style: normal;
	font-weight: 600;
	line-height: 1.167;
	font-size: 2.2rem;
	text-align: center;
	display: block;
`;

const ContentCards = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
`;

const Subtitle = styled.div`
	font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		'Segoe UI Symbol';
	font-style: normal;
	font-weight: normal;
	font-size: 1.5rem;
	line-height: 1.33;
	text-align: center;
	letter-spacing: -0.025em;
	color: rgb(127, 127, 127);
	margin-bottom: 2.5rem;
`;

const Ideas = () => {
	return (
		<Wrapper>
			<ContentTitle>
				<Title>
					Find the project that you like the most and make it happen
				</Title>
				<Subtitle>Discover new ideas daily</Subtitle>
			</ContentTitle>
			<BackgroundContent>
				<ContentCards>
					{Data.map(idea => {
						return <CardIdea key={idea.id} idea={idea} />;
					})}
				</ContentCards>
			</BackgroundContent>
		</Wrapper>
	);
};

export default Ideas;
