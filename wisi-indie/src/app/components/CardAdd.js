'use client';
import styled from 'styled-components';
import Image from 'next/image';

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
	justify-content: flex-start;
	align-items: center;
	border: 2px dashed;
	border-radius: 17px;
	width: 100%;
	height: 100%;
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
			<Card>
				<CardContent>
					<ContentInfo>
						<Image src='./images/IconPlus.svg' width={21} height={21} />
					</ContentInfo>
					<NewIdeaContent>
						<NewIdea>New Idea</NewIdea>
					</NewIdeaContent>
				</CardContent>
			</Card>
		</>
	);
};

export default CardAdd;
