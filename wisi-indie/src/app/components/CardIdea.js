'use client';
import styled from 'styled-components';

const Card = styled.div`
	width: 980px;
	height: 140px;
	border-radius: 20px;
	padding: 3px;
	position: relative;
	z-index: 30;
`;

const CardContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	background: #1a1c20;
	border-radius: 15%;
	// box-shadow: inset 9.91px 9.91px 15px #bfc7d9,
	// 	inset -9.91px -9.91px 15px #e5efff;

	// 1style
	// background: #e0e0e0;
	//   box-shadow: 15px 15px 35px #bebebe,
	//   -15px -15px 50px #ffffff;

	// 2style
	// background: #C8CEEA;
	// border-radius: 15%;
	// box-shadow: inset 9.91px 9.91px 15px #B6BBD5, inset -9.91px -9.91px 15px #DAE1FF;
	border-radius: 17px;
	width: 100%;
	height: 100%;
	padding: 40px;
`;

const Text = styled.h2`
	font-size: 20px;
	color: #ffffffeb;
	font-weight: 600;
	font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		'Segoe UI Symbol';
`;

const ContentInfo = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 0 19.5px 0 19.5px;
`;

const Date = styled.p`
	font-size: 12px;
	color: rgb(127, 127, 127);
	font-family: var(--font-family-inter);
`;

const Autor = styled.p`
	font-size: 12px;
	color: rgb(127, 127, 127);
	font-family: var(--font-family-inter);
`;

const ContentIdea = styled.div`
	padding: 0 20px 0 20px;
`;

const CardIdea = props => {
	const { title, date, autor } = props.idea;
	return (
		<>
			<Card>
				<CardContent>
					<ContentInfo>
						<Autor>{`By ${autor}`}</Autor>
						<Date>{date}</Date>
					</ContentInfo>
					<ContentIdea>
						<Text>{title}</Text>
					</ContentIdea>
				</CardContent>
			</Card>
		</>
	);
};

export default CardIdea;
