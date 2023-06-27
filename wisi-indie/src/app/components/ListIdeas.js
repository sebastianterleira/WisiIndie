'use client';
import CardIdea from './subComponents/CardIdea';
import styled from 'styled-components';
import CardAdd from './subComponents/CardAdd/CardAdd';
import { useEffect, useState } from 'react';
import { useIdea } from '../context/AppContext';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Wrapper = styled.div`
	min-height: 100vh;
	padding-top: 12.5rem;
	padding-bottom: 9.5rem;
	background-color: rgb(255, 255, 255);
`;

const BackgroundContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	border-radius: 30px;
	width: 1090px;
	height: 1060px;
	background: #e8e8e8;
	// border: 1px solid #e8e8e8;
	// // box-shadow: 20px 20px 40px #bebebe, -20px -20px 40px #ffffff;
	// box-shadow: 6px 6px 20px #c5c5c5, -6px -6px 40px #ffffff;
	background: #d2dbee;
	border-radius: 30px;
	box-shadow: inset 9.91px 9.91px 15px #bfc7d9,
		inset -9.91px -9.91px 15px #e5efff;
	border: 2px double;
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

const Pagination = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding-top: 2rem;
`;

const PagButton = styled.p`
	font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		'Segoe UI Symbol';
	font-style: normal;
	font-weight: normal;
	font-size: clamp(0.4em, 2vw, 0.8rem);
	line-height: 1.33;
	text-align: center;
	letter-spacing: -0.025em;
	color: rgb(127, 127, 127);
`;

const ListIdeas = () => {
	const { getDataIdea } = useIdea();
	const [page, setPage] = useState(1);
	const [dataIdea, setDataIdea] = useState([]);

	const pageNumber = Math.ceil(dataIdea.length / 5);

	function handleDecresePage() {
		if (page === 1) return;

		const newPage = page - 1;
		setPage(newPage);
	}

	function handleIncresePage() {
		if (page === pageNumber) return;
		const newPage = page + 1;
		setPage(newPage);
	}

	useEffect(() => {
		const viewData = async () => {
			const data = await getDataIdea();
			setDataIdea(data);
			return data;
		};
		viewData();
	}, []);

	let category = 0;
	const groupByCategory = dataIdea.reduce((accu, product, index) => {
		if (index % 5 === 0) {
			category++;
		}
		accu[category] = accu[category] ?? [];
		accu[category].push(product);
		return accu;
	}, {});

	console.log(groupByCategory);

	console.log(dataIdea);

	return (
		<Wrapper id='connect-listideas'>
			<ContentTitle>
				<Title>
					Find the project that you like the most and make it happen
				</Title>
				<Subtitle>Discover new ideas daily</Subtitle>
			</ContentTitle>
			<BackgroundContent>
				<ContentCards>
					{groupByCategory[`${page}`]?.map(idea => {
						return <CardIdea key={idea.id} idea={idea} />;
					})}
					<CardAdd />
				</ContentCards>
				<Pagination>
					<FaArrowLeft
						onClick={handleDecresePage}
						style={{ cursor: 'pointer' }}
					/>
					{[...Array(pageNumber)].map((x, index) => (
						<PagButton key={index} current={page}>
							{index + 1}
						</PagButton>
					))}
					<FaArrowRight
						onClick={handleIncresePage}
						style={{ cursor: 'pointer' }}
					/>
				</Pagination>
			</BackgroundContent>
		</Wrapper>
	);
};

export default ListIdeas;
