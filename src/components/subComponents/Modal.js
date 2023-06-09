import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(30px);
	z-index: var(--zIndex-10);
`;

const ContenedorModal = styled.div`
	max-width: ${props =>
		props.width === 'sm'
			? '430px'
			: props.width === 'md'
			? '493px'
			: props.width === 'lg'
			? '1000px'
			: '430px'};
	min-height: ${props =>
		props.width === 'sm'
			? '350px'
			: props.width === 'md'
			? '574px'
			: props.width === 'lg'
			? '500px'
			: '350px'};
	background: ${props =>
		props.background === 'light'
			? 'rgb(255,255,255)'
			: props.background === 'dark'
			? '#000'
			: '#000'};
	border: 1px solid rgba(55, 46, 46, 0.6);
	border-radius: clamp(50px, 2vw, 25px);
	position: relative;
	padding: 1.25rem;
	margin: 1rem;
	box-sizing: border-box;
	width: 100%;
`;

const BotonClose = styled.div`
	color: #fff;
	position: absolute;
	background-color: transparent;
	border: none;
	line-height: 20px;
	font-size: 15px;
	cursor: pointer;
	font-family: var(--font-family-inter);
	transition: transform 0.5s ease;

	&:hover {
		transform: rotate(180deg) scale(1.5);
	}
`;

const Modal = ({ children, width, height, onClose, fill, background }) => {
	const modalRef = useRef(null);
	const bodyRef = useRef(null);

	useEffect(() => {
		AOS.init({
			duration: 1000, // Duración de la animación en milisegundos
		});
	});

	// Función que se ejecuta cuando se hace clic fuera del modal
	const handleClickOutside = event => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			onClose();
		}
	};
	return (
		<>
			<Overlay ref={bodyRef} onClick={handleClickOutside}>
				<ContenedorModal
					width={width}
					height={height}
					background={background}
					ref={modalRef}
					data-aos='zoom-in'
					data-aos-duration='600'
					data-aos-anchor-placement='center-center'
				>
					<BotonClose onClick={onClose}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='25'
							height='25'
							fill={fill}
							viewBox='0 0 16 16'
						>
							<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
						</svg>
					</BotonClose>
					{children}
				</ContenedorModal>
			</Overlay>
		</>
	);
};

export default Modal;
