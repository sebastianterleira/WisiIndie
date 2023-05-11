'use client';
import styled from 'styled-components';
import Image from 'next/image';
import './CardAdd.css';

const Card = styled.div`
	border-radius: 20px;

	&:hover {
		.iconPlus {
			transform: scale(1.4) rotate(180deg);
		}
		.newIdea {
			transform: scale(1.2);
		}
	}
`;

const CardContent = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-radius: 17px;
	padding: 40px;
`;

const NewIdea = styled.h2`
	font-size: 20px;
	color: #373232eb;
	font-weight: 600;
	font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		'Segoe UI Symbol';
`;

const ContentInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 19.5px 0 19.5px;
`;

const NewIdeaContent = styled.div`
	padding: 0 20px 0 20px;
`;

const CardAdd = () => {
	return (
		<>
			<Card className='card'>
				<CardContent className='card-info'>
					<ContentInfo>
						<Image src='./images/IconPlus.svg' width={21} height={21} className='iconPlus'/>
					</ContentInfo>
					<NewIdeaContent>
						<NewIdea className='newIdea'>New Idea</NewIdea>
					</NewIdeaContent>
				</CardContent>
			</Card>
		</>
	);
};

export default CardAdd;
