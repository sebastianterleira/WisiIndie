'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Modal from '../Modal/Modal';
import './CardAdd.css';
import { useEffect, useState } from 'react';
import { supabase } from '../../../../../supabase/client';
import { useIdea } from '../../../context/AppContext';

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
	flex-wrap: wrap;
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
	margin: 0 100px 0 100px;
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
	text-align: center;
`;

const TitleModalCreate = styled.h1`
	color: #000;
	padding-top: 3.875rem;
	padding-bottom: 2.5rem;
	font-style: normal;
	font-weight: 900;
	font-size: 30px;
	line-height: 36px;
	font-family: var(--font-family-inter);
	text-align: center;
`;

const ContentFormModal = styled.form`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 30px;
	align-content: center;
	justify-content: flex-start;
	margin: 0 100px 0 100px;
`;

const TextAreaInput = styled.textarea`
	width: 780px;
	height: 200px;
	resize: none;
	border: 1px solid rgb(0, 0, 0, 0.5);
	border-radius: 15px;
	padding: 15px;

	&:focus {
		outline: none;
	}
`;

const ReactLogo = styled.h1`
	font-size: 113px;
	position: absolute;
	top: 360px;
	right: 15px;
	animation: animate_6820 5s linear infinite;
	transition: 0.3 s;
`;

const TitleModalAfterCreateIDea = styled.h1`
	color: #000;
	padding-top: 4.875rem;
	font-style: normal;
	font-weight: 900;
	font-size: 30px;
	line-height: 36px;
	font-family: var(--font-family-inter);
	text-align: center;
`;

const ContentCheck = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CardAdd = () => {
	const [showModal, setShowModal] = useState(false);
	const [showModalCreateIdea, setShowModalCreateIdea] = useState(false);
	const [userAuth, setUserAuth] = useState(false);
	const [description, setDescription] = useState('');
	const { createIdea } = useIdea();

	useEffect(async () => {
		const session = await supabase.auth.getUser();
		if (session.data?.user) {
			setUserAuth(false);
		} else {
			setUserAuth(true);
		}
		console.log('hola' + userAuth);
		console.log(session);
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		createIdea(description);
		setShowModal(false);
		setDescription('');
	};

	const handleCloseModal = () => {
		setShowModal(false);
		document.body.classList.remove('modal-open');
	};

	const handleOpenModal = () => {
		setShowModal(true);
		document.body.classList.add('modal-open');
	};

	const handleCloseModalCreateIdea = () => {
		setShowModalCreateIdea(false);
		document.body.classList.remove('modal-open');
	};

	const handleOpenModalCreateIdea = () => {
		setShowModalCreateIdea(true);
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
			{userAuth === true
				? showModal && (
						<Modal
							width='sm'
							height='sm'
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
									<ButtonTop
										className='button_top'
										href='/signin'
										alt='Redirección a Sign in'
									>
										SIGN IN
									</ButtonTop>
								</ButtonSingInModal>
							</ContentButtonModal>
							<h1 className='marcianoIcon'>👽</h1>
							<h1 className='reactLogo'>⚛</h1>
						</Modal>
				  )
				: showModal && (
						<Modal
							width='lg'
							height='lg'
							fill='#000'
							background='light'
							onClose={handleCloseModal}
						>
							<h1 className='pizzaIcon'>🍕</h1>
							<ContentTitleModal>
								<TitleModalCreate>
									You should write your idea here 💡
								</TitleModalCreate>
							</ContentTitleModal>
							<ContentFormModal onSubmit={handleSubmit}>
								<div>
									<TextAreaInput
										placeholder={'Create New Idea'}
										onChange={e => setDescription(e.target.value)}
										maxLength={187}
									/>
								</div>
								<ButtonSingInModal className='buttonSingInModal' type='submit'>
									<ButtonTop
										className='button_top'
										alt='Redirección a Sign in'
										onClick={handleOpenModalCreateIdea}
									>
										Add Idea
									</ButtonTop>
								</ButtonSingInModal>
							</ContentFormModal>
							<h1 className='marcianoIcon'>👽</h1>
							<ReactLogo>⚛</ReactLogo>
						</Modal>
				  )}
			{showModalCreateIdea && (
				<Modal
					width='sm'
					height='sm'
					fill='#000'
					background='light'
					onClose={handleCloseModalCreateIdea}
				>
					<h1 className='pizzaIcon'>🍕</h1>
					<h1 className='marcianoIcon'>👽</h1>
					<ContentTitleModal>
						<TitleModalAfterCreateIDea>Added Successfully</TitleModalAfterCreateIDea>
					</ContentTitleModal>
					<ContentCheck>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='306'
							height='206'
							fill='#1cbf28d9'
							viewBox='0 0 16 16'
						>
							<path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
						</svg>
					</ContentCheck>
				</Modal>
			)}
		</>
	);
};

export default CardAdd;
