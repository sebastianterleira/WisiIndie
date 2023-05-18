import { useRef } from 'react';
import styled from 'styled-components';

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
`;

const ContenedorModal = styled.div`
	width: ${props =>
		props.width === 'sm'
			? '370px'
			: props.width === 'md'
			? '430px'
			: props.width === 'lg'
			? '493px'
			: '370px'};
	height: ${props =>
		props.width === 'sm'
			? '200px'
			: props.width === 'md'
			? '350px'
			: props.width === 'lg'
			? '574px'
			: '200px'};
	background: #000000;
	border: 1px solid rgba(55, 46, 46, 0.6);
	border-radius: 25px;
	position: relative;
	padding: 20px;
	box-sizing: border-box;
`;

const BotonClose = styled.div`
	color: #fff;
	position: absolute;
	top: 24px;
	right: 445px;
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

const Modal = ({ children, width, height, onClose }) => {
	const modalRef = useRef(null);
	const bodyRef = useRef(null);

	// Función que se ejecuta cuando se hace clic fuera del modal
	const handleClickOutside = event => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			onClose();
		}
	};
	return (
		<>
			<Overlay ref={bodyRef} onClick={handleClickOutside}>
				<ContenedorModal width={width} height={height} ref={modalRef}>
					<BotonClose onClick={onClose}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='25'
							height='25'
							fill='currentColor'
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
