'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../../supabase/client';
import Input from '../components/subComponents/input/input';
import { LogoSvg } from '../components/AllSvgs';
import styled from 'styled-components';
import ButtonOauth from '../components/subComponents/buttonOauth/buttonOauth';
import { Formik, Form, ErrorMessage } from 'formik';
import { useIdea } from '../context/AppContext';

const LogoText = styled.p`
	font-family: 'Inter variable', sans-serif;
	font-style: normal;
	font-weight: 900;
	font-size: 30px;
	line-height: 30px;
	cursor: default;
`;

const SingIn = () => {
	const { userDb, getUserDabase } = useIdea();
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		getUserDabase();
	}, []);

	return (
		<section className='bg-black-50 h-screen flex items-center justify-center'>
			<div className='bg-white rounded-3xl flex flex-col w-96 px-8 py-7 gap-9'>
				<div className='flex items-center gap-4'>
					<LogoSvg fill={'#000'} />
					<LogoText className='LightModeWiseIndie'>WiseIndie</LogoText>
				</div>
				<div>
					<h1 className='text-xl font-semibold'>Sign in</h1>
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
				<Formik
					initialValues={{
						password: '',
						email: '',
					}}
					validate={async valuesInputs => {
						const ERRORS_MESSAGES = {};
						const EMAILS_DB_AUTH = userDb.map(data => data.email);
						const PASS_DB_AUTH = userDb.map(data => data.password);

						console.log(PASS_DB_AUTH);

						// validación Email
						if (!valuesInputs.email) {
							ERRORS_MESSAGES.email = 'Please enter an email';
						} else if (!EMAILS_DB_AUTH.includes(valuesInputs.email)) {
							ERRORS_MESSAGES.email = 'Invalid credential for email';
						}

						// validación Password
						if (!valuesInputs.password) {
							setIsError(false)
							ERRORS_MESSAGES.password = 'Please enter an password';
						}

						return ERRORS_MESSAGES;
					}}
					onSubmit={async (valuesInputs, { resetForm }) => {
						resetForm();
						const { error, data } = await supabase.auth.signInWithPassword({
							email: valuesInputs.email,
							password: valuesInputs.password,
						});
						console.log(data);
						if (error) {
							console.log(error);
							setIsError(true);
						} else {
							// Redirigir a la página de inicio
							window.location.href = '/';
						}
						// console.log('testing');
					}}
				>
					{({ errors }) => (
						<Form className='flex flex-col gap-4'>
							<Input
								id='email'
								label={'Email'}
								type={'email'}
								name={'email'}
								placeholder={'youremail@gmail.com'}
							/>
							<ErrorMessage
								name='email'
								component={() => (
									<div className='text-red-500 text-xs'>{errors.email}</div>
								)}
							/>
							<Input
								id='password'
								label={'Password'}
								type={'password'}
								name={'password'}
								placeholder={'**********'}
							/>
							<ErrorMessage
								name='password'
								component={() => (
									<div className='text-red-500 text-xs'>{errors.password}</div>
								)}
							/>
							{isError && (
								<div className='text-red-500 text-xs'>
									Invalid credential for password
								</div>
							)}
							<button className='w-full px-1 py-2 rounded-md box-border text-center text-white bg-black text-xs font-semibold outline focus:outline-4 focus:outline-gray-400 '>
								CONTINUE
							</button>
						</Form>
					)}
				</Formik>
				<p className='text-xs text-gray-500'>
					No account?
					<a className='text-black mx-2' href='/signup'>
						Sign up
					</a>
				</p>
			</div>
		</section>
	);
};

export default SingIn;
