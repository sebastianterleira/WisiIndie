'use client';
import styles from '../../styles/CardAdd/card-add.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';
import { useEffect, useState } from 'react';
import { supabase } from '../../../supabase/client';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { useIdea } from '../../context/AppContext';

const CardAdd = () => {
	const [showModal, setShowModal] = useState(false);
	const [showModalCreateIdea, setShowModalCreateIdea] = useState(false);
	const [userAuth, setUserAuth] = useState(null);
	const [maxChar, setMaxChar] = useState(false);
	const { createIdea } = useIdea();

	useEffect(() => {
		const userLocalStorage = localStorage.getItem(
			'sb-rirpcujqedgvcbphnvvz-auth-token'
		);

		userLocalStorage ? setUserAuth(userLocalStorage) : null;
	}, []);

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

	return (
		<>
			<div className={styles.card} onClick={handleOpenModal}>
				<div className={styles['card__container']}>
					<div className={styles['container__info']}>
						<Image
							src='./images/IconPlus.svg'
							width={21}
							height={21}
							className={styles['container__info-icon']}
							alt={'Icono agregar para el boton de agregar idea'}
						/>
					</div>
					<h2
						className={`${styles['container__info-text']} ${styles['card__container-text']}`}
					>
						New Idea
					</h2>
				</div>
			</div>
			{userAuth !== null
				? showModal && (
						<Modal
							width='lg'
							height='lg'
							fill='#000'
							background='light'
							onClose={handleCloseModal}
						>
							<h1 className={styles.pizzaIcon}>🍕</h1>
							<div className={styles['modal__container-title']}>
								<h1 className={styles['container__title']}>
									You should write your idea here 💡
								</h1>
							</div>
							<Formik
								initialValues={{
									description: '',
								}}
								validate={valuesInputs => {
									const ERRORS_MESSAGES = {};

									// Validate description
									if (!valuesInputs.description) {
										ERRORS_MESSAGES.description = 'Please enter an description';
									} else if (valuesInputs.description.length >= 80) {
										ERRORS_MESSAGES.description = '';
										setMaxChar(true);
									} else if (valuesInputs.description.length < 80) {
										setMaxChar(false);
									}

									return ERRORS_MESSAGES;
								}}
								onSubmit={async (valuesInputs, { resetForm }) => {
									resetForm();
									createIdea(valuesInputs.description);
									setShowModal(false);
									setShowModalCreateIdea(true);
									document.body.classList.add('modal-open');
								}}
							>
								{({ errors }) => (
									<Form className={styles.form}>
										<div>
											<Field
												id='description'
												name='description'
												placeholder={'Create New Idea'}
												className={styles.textFiled}
												cols='20'
												as='textarea'
											/>
											<ErrorMessage
												name='description'
												component={() => (
													<div className='text-red-500 text-xs'>
														{errors.description}
													</div>
												)}
											/>
											<div
												className={
													maxChar
														? 'text-red-500 text-sm'
														: 'text-gray-500 text-sm'
												}
											>
												Max characters 80
											</div>
										</div>
										<button
											className={`${styles['container__button-singin']}`}
											type='submit'
										>
											<a
												className={styles['button__link']}
												alt='Redirección a Sign in'
											>
												Add Idea
											</a>
										</button>
									</Form>
								)}
							</Formik>
							<h1 className={styles.marcianoIcon}>👽</h1>
							<h1 className={`${styles.reactLogo} ${styles.reactLogoForm}`}>
								⚛
							</h1>
						</Modal>
				  )
				: showModal && (
						<Modal
							width='sm'
							height='sm'
							fill='#000'
							background='light'
							onClose={handleCloseModal}
						>
							<h1 className={styles.pizzaIcon}>🍕</h1>
							<div className={styles['modal__container-title']}>
								<h1 className={styles['container__title']}>
									You must log in to continue 👀
								</h1>
							</div>
							<div className={styles['modal__container-button']}>
								<button className={`${styles['container__button-singin']}`}>
									<Link
										className={styles['button__link']}
										href={'/signin'}
										alt='Redirección a Sign in'
									>
										SIGN IN
									</Link>
								</button>
							</div>
							<h1 className={styles.marcianoIcon}>👽</h1>
							<h1 className={styles.reactLogo}>⚛</h1>
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
					<h1 className={styles.pizzaIcon}>🍕</h1>
					<h1 className={styles.marcianoIcon}>👽</h1>
					<div className={styles['modal__container-title']}>
						<h1 className={styles['container__title-after']}>
							Added Successfully
						</h1>
					</div>
					<div className={styles['content__svg']}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='306'
							height='206'
							fill='#1cbf28d9'
							viewBox='0 0 16 16'
						>
							<path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
						</svg>
					</div>
				</Modal>
			)}
		</>
	);
};

export default CardAdd;
