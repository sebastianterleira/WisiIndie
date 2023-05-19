'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Modal from '../Modal/Modal';
import './CardAdd.css';
import { useState } from 'react';

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

const ContentTitleModal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
`;

const TitleModal = styled.h1`
	color: #000;
	padding-top: 4.875rem;
	padding-bottom: 3.5rem;
	font-style: normal;
	font-weight: 900;
	font-size: 30px;
	line-height: 36px;
	font-family: var(--font-family-inter);
	text-align: center;
`;

const ContentButtonModal = styled.div`
	display: flex;
	justify-content: center;
`;

const ButtonSingInModal = styled.button`
	/* Variables */
	--button_radius: 0.75em;
	--button_color: #e8e8e8;
	--button_outline_color: #000000;
	font-size: 17px;
	font-weight: bold;
	border: none;
	border-radius: var(--button_radius);
	background: var(--button_outline_color);
`;

const ButtonTop = styled.a`
	display: block;
	box-sizing: border-box;
	border: 2px solid var(--button_outline_color);
	border-radius: var(--button_radius);
	padding: 0.75em 1.5em;
	background: var(--button_color);
	color: var(--button_outline_color);
	transform: translateY(-0.2em);
	transition: transform 0.1s ease;
`;

const CardAdd = () => {
	const [showModal, setShowModal] = useState(false);

	const handleCloseModal = () => {
		setShowModal(false);
		document.body.classList.remove('modal-open');
	};

	const handleOpenModal = () => {
		setShowModal(true);
		document.body.classList.add('modal-open');
	};

	return (
		<>
			<Card className='card' onClick={handleOpenModal}>
				<CardContent className='card-info'>
					<ContentInfo>
						<Image
							src='./images/IconPlus.svg'
							width={21}
							height={21}
							className='iconPlus'
						/>
					</ContentInfo>
					<NewIdeaContent>
						<NewIdea className='newIdea'>New Idea</NewIdea>
					</NewIdeaContent>
				</CardContent>
			</Card>
			{showModal && (
				<Modal
					width='md'
					height='md'
					fill='#000'
					background='light'
					onClose={handleCloseModal}
				>
					<h1 className='pizzaIcon'>🍕</h1>
					<ContentTitleModal>
						<TitleModal>You must log in to continue 👀</TitleModal>
					</ContentTitleModal>
					<ContentButtonModal>
						<ButtonSingInModal className='buttonSingInModal'>
							<ButtonTop className='button_top' href='/signin' alt="Redirección a Sign in">SIGN IN</ButtonTop>
						</ButtonSingInModal>
					</ContentButtonModal>
					<h1 className='marcianoIcon'>👽</h1>
					<h1 className='reactLogo'>⚛</h1>
				</Modal>
			)}
		</>
	);
};

export default CardAdd;
