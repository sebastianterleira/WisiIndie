'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Laptop from '../../../assets/laptopClosed.png';
import { useState } from 'react';
// import Modal from '../subComponents/ModalContactUs/ModalContactUs';
import './Footer.css';
import Modal from '../subComponents/Modal/Modal';

const Wrapper = styled.div`
	min-height: 100vh;
	padding-top: 1.25rem;
`;

// Styles POV
const ContentPov = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 140px 210px 100px 210px;
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
	font-size: 40px;
	line-height: 48px;
	text-align: center;
	letter-spacing: -2px;
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
	margin: 20px 0 50px 0;
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

// Footer Styles
const WrapperFooter = styled.footer`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: center;
	align-items: center;
`;

const FooterLogoContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 9.36px;
	margin: 20px 101px 20px 130px;
`;

const FooterLinksContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 20px 101px 20px 130px;
`;

const ProductByText = styled.h2`
	color: rgb(156 163 175/ 0.8);
	line-height: 1.25rem;
	font-size: 0.75rem;
	font-weight: 400;
	font-style: normal;
	text-align: center;
`;

const UpdatedLink = styled.a`
	color: rgb(156 163 175/ 0.8);
	line-height: 1.25rem;
	font-size: 0.75rem;
	font-weight: 400;
	font-style: normal;
	text-align: center;
	text-align: center;
	margin: 0 43px 0 0;

	&:hover {
		color: rgb(156 163 175/ 1);
	}
`;

const ContactLink = styled.a`
	color: rgb(156 163 175/ 0.8);
	line-height: 1.25rem;
	font-size: 0.75rem;
	font-weight: 400;
	font-style: normal;
	text-align: center;
	text-align: center;
	margin: 0 44px 0 0;
	cursor: pointer;

	&:hover {
		color: rgb(156 163 175/ 1);
	}
`;

// Modal Content Styles

const ContentTitleModal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
`;

const TitleModal = styled.h1`
	background-image: var(--grisPrimary);
	background-color: #fff;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	padding-top: 4.875rem;
	padding-bottom: 5.5rem;
	font-style: normal;
	font-weight: 900;
	font-size: 30px;
	line-height: 36px;
	font-family: var(--font-family-inter);
	text-align: center;
`;

const ContentTeam = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	gap: 65px;
`;

const ContentCollaborator = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
`;

const CollaboratorText = styled.div`
	background-image: var(--subtitleColorModal);
	background-color: #fff;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	font-style: normal;
	font-weight: 900;
	font-size: 16px;
	line-height: 18px;
	font-family: var(--font-family-inter);
	text-align: center;
`;

const CollaboratorEmail = styled.div`
	background-image: var(--grisPrimary);
	background-color: #fff;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 19px;
	font-family: var(--font-family-outfit);
	text-align: center;
	letter-spacing: -0.03em;
`;

const Footer = () => {
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
		<Wrapper>
			<ContentPov>
				<Title>Now it’s easier to start a new project</Title>
				<ButtonTryOut href='#connect-listideas' className='button'>
					<TryWisiIndie>Try WiseIndie</TryWisiIndie>
					<Image
						src='./images/ArrowRightIcon.svg'
						alt='Icono de flecha invertida a la derecha'
						width={12}
						height={6}
						className='right-arrow'
					/>
				</ButtonTryOut>
				<Image src={Laptop} alt='Laptop Closed Off' className='laptopClosed' />
			</ContentPov>
			<WrapperFooter>
				<FooterLogoContent>
					<Image
						src='./images/LogoFooter.svg'
						alt='Logo de WiseIndie 💡'
						width={15}
						height={25}
						className='IconLogoFooter'
					/>
					<ProductByText>A product by team WisiIndi © 2023</ProductByText>
				</FooterLogoContent>
				<FooterLinksContent>
					<UpdatedLink
						target={'_blank'}
						rel='noreferrer'
						href='https://github.com/sebastianterleira/WisiIndie'
						className='updatedLink'
					>
						Updates
					</UpdatedLink>
					<ContactLink className='contactLink' onClick={handleOpenModal}>
						Contact us
					</ContactLink>
					<a
						target={'_blank'}
						rel='noreferrer'
						href='https://github.com/sebastianterleira/WisiIndie'
					>
						<Image
							src='./images/GithubIcon.svg'
							alt='Icono de Github'
							width={20}
							height={18}
							className='IconGithubFooter'
						/>
					</a>
					<a
						target={'_blank'}
						rel='noreferrer'
						href='https://github.com/sebastianterleira/WisiIndie'
					>
						<Image
							src='./images/TwitterIcon.svg'
							alt='Icono de Twitter'
							width={20}
							height={18}
							className='IconTwitterFooter'
						/>
					</a>
				</FooterLinksContent>
			</WrapperFooter>
			{showModal && (
				<Modal
					width='md'
					height='md'
					fill='#ffffff'
					background='dark'
					onClose={handleCloseModal}
				>
					<ContentTitleModal>
						<TitleModal>Contact us</TitleModal>
					</ContentTitleModal>
					<ContentTeam>
						<ContentCollaborator>
							<CollaboratorText>Collaborator</CollaboratorText>
							<CollaboratorEmail>seb.terleira1204@gmail.com</CollaboratorEmail>
						</ContentCollaborator>
						<ContentCollaborator>
							<CollaboratorText>Collaborator</CollaboratorText>
							<CollaboratorEmail>josecamilo1902@outlook.com</CollaboratorEmail>
						</ContentCollaborator>
						<ContentCollaborator>
							<CollaboratorText>Collaborator</CollaboratorText>
							<CollaboratorEmail>hesz.bruno05@gmail.com</CollaboratorEmail>
						</ContentCollaborator>
					</ContentTeam>
				</Modal>
			)}
		</Wrapper>
	);
};

export default Footer;
