import styles from './ModalContactUs.module.css';
import { useRef } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
  background: transparent;
  backdrop-filter: blur(0px) ;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
  transition: background, backdrop-filter .3s linear;
`

const ContentTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
`;

const Title = styled.h1`
	background-image: var(--grisPrimary);
	background-color: #fff;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	padding-top: 5.875rem;
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

const Modal = ({ show, onClose }) => {
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
				<ModalOverlay
					id="modalOverlay"
					onClick={handleClickOutside}
					ref={bodyRef}
				>
			{show && (
					<div className={styles.modal} ref={modalRef}>
          <div className={styles.closeButton} onClick={onClose}>
            X
          </div>
          <div className={styles.modalContent}>
            <ContentTitle>
              <Title>Contact us</Title>
            </ContentTitle>
            <ContentTeam>
              <ContentCollaborator>
                <CollaboratorText>Collaborator</CollaboratorText>
                <CollaboratorEmail>
                  seb.terleira1204@gmail.com
                </CollaboratorEmail>
              </ContentCollaborator>
              <ContentCollaborator>
                <CollaboratorText>Collaborator</CollaboratorText>
                <CollaboratorEmail>
                  josecamilo1902@outlook.com
                </CollaboratorEmail>
              </ContentCollaborator>
              <ContentCollaborator>
                <CollaboratorText>Collaborator</CollaboratorText>
                <CollaboratorEmail>
                  hesz.bruno05@gmail.com
                </CollaboratorEmail>
              </ContentCollaborator>
            </ContentTeam>
          </div>
        </div>
			)}
      </ModalOverlay>
		</>
	);
};

export default Modal;
