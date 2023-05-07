'use client';
import styled from 'styled-components';

const Card = styled.div`
	width: 980px;
	height: 104px;
	border-radius: 20px;
	padding: 3px;
`;

const CardContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: #d2dbee;
	border-radius: 15%;
	box-shadow: inset 9.91px 9.91px 15px #bfc7d9,
		inset -9.91px -9.91px 15px #e5efff;

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
`;

// const Text = styled.h2`
// 	padding: 20px;
// 	color: #fff;
// 	font-size: 20px;
// `;

const CardIdea = props => {
	// const { title, date, autor } = props.idea;
	return (
		<>
			<Card>
				<CardContent>
					{/* <Text>{title}</Text>
            <h1>{date}</h1>
            <h1>{autor}</h1> */}
				</CardContent>
			</Card>
		</>
	);
};

export default CardIdea;
