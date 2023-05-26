'use client';
import "./Signup.css"
import { useEffect, useState } from 'react';
import { supabase } from '../../../supabase/client';
import Input from '../components/subComponents/input/input';
import LogoSvg from '../components/AllSvgs';
import styled from 'styled-components';
import ButtonOauth from '../components/subComponents/buttonOauth/buttonOauth';
import { useIdea } from '../context/AppContext';
import { useRouter } from 'next/navigation';
import Modal from '../components/subComponents/Modal/Modal';
import Image from 'next/image';
import VerifyEmail from '../../assets/VerifyEmail.png';

const LogoText = styled.p`
	font-family: 'Inter variable', sans-serif;
	font-style: normal;
	font-weight: 900;
	font-size: 30px;
	line-height: 30px;
	cursor: default;
`;

const ContentModal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 20px;
`

const TexModal = styled.h1`
	color: #000;
	padding-top: 2.875rem;
	padding-bottom: 2.5rem;
	font-style: normal;
	font-weight: 700;
	font-size: 30px;
	line-height: 36px;
	font-family: var(--font-family-inter);
	text-align: center;
`;

const SingUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [showModal, setShowModal] = useState(false);
	const router = useRouter();
	const { insertUserData, userDb, getUserDabase } = useIdea();

	useEffect(() => {
		getUserDabase();
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const result = await supabase.auth.signUp({
				email,
				password,
			});
			const emails = userDb.map(data => data.email);
			supabase.auth.onAuthStateChange(async (event, session) => {
				if (event === 'SIGNED_IN') {
					if (
						userDb.length === 0 ||
						!emails.includes(result.data?.user?.email)
					) {
						await insertUserData(username, email, password, result);
						router.push('/');
					} else {
						console.error('El usuario ya existe');
					}
				}
			});
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	};

	function handleEmail(e) {
		if (e.target.name === 'username') setUsername(e.target.value);
		if (e.target.name === 'email') setEmail(e.target.value);
		if (e.target.name === 'password') setPassword(e.target.value);
	}

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
			<section className='bg-black-50 h-screen flex items-center justify-center'>
				<div className='bg-white rounded-3xl flex flex-col w-96 px-8 py-7 gap-9'>
					<div className='flex items-center gap-4'>
						<LogoSvg fill={'#000'} />
						<LogoText className='LightModeWiseIndie'>WiseIndie</LogoText>
					</div>
					<div>
						<h1 className='text-xl font-semibold'>Create your account</h1>
						<p className='text-gray-500'>to continue to WiseIndie</p>
					</div>
					<div className='flex flex-col gap-9'>
						<ButtonOauth
							iconSrc={'./images/GithubIcon.svg'}
							text={'Continue with GitHub'}
						/>
						<div className='flex items-center'>
							<div className='bg-gray-300 h-0.1 flex-1'></div>
							<span className='mx-2 text-xs'>OR</span>
							<div className='bg-gray-300 h-0.1 flex-1'></div>
						</div>
					</div>
					<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
						<Input
							label={'Username'}
							type={'text'}
							name={'username'}
							placeholder={'mathew05-2'}
							methodChange={handleEmail}
						/>
						<Input
							label={'Email'}
							type={'email'}
							name={'email'}
							placeholder={'youremail@gmail.com'}
							methodChange={handleEmail}
						/>
						<Input
							label={'Password'}
							type={'password'}
							name={'password'}
							placeholder={'**********'}
							methodChange={handleEmail}
						/>
						<button
							className='w-full px-1 py-2 rounded-md box-border text-center text-white bg-black text-xs font-semibold outline focus:outline-4 focus:outline-gray-400 '
							onClick={handleOpenModal}
						>
							CONTINUE
						</button>
					</form>
					<p className='text-xs text-gray-500'>
						Have an account?
						<a className='text-black mx-2' href='/signin'>
							Sign in
						</a>
					</p>
				</div>
			</section>
			{showModal && (
				<Modal
					width='sm'
					height='sm'
					fill='#000'
					background='light'
					onClose={handleCloseModal}
				>
					<ContentModal>
						<Image
							src={VerifyEmail}
							alt='Imagen de carta que hace referencia a Verificar su Email'
							height={185}
							width={185}
							className='animation-image'
						/>
					<TexModal>Verify your mail 👀</TexModal>
					</ContentModal>
				</Modal>
			)}
		</>
	);
};

export default SingUp;
