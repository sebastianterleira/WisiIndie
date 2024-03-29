'use client';
import styled from 'styled-components';
import Input from '../componentTailwind/input';
import ButtonOauth from '../componentTailwind/buttonOauth';
import Link from 'next/link';
import { useEffect } from 'react';
import { supabase } from '../../../supabase/client';
import { LogoSvg } from '../../components/AllSvgs';
import { useIdea } from '../../context/AppContext';
import { useRouter } from 'next/navigation';
import { Formik, Form, ErrorMessage } from 'formik';
import { inter } from '../../styles/fonts';

const LogoText = styled.p`
	font-style: normal;
	font-weight: 900;
	font-size: 30px;
	line-height: 30px;
`;

const SingUp = () => {
	const { insertUserData, userDb, getUserDabase } = useIdea();
	const router = useRouter();

	useEffect(() => {
		getUserDabase();
	}, []);

	return (
		<>
			<section className='bg-black-50 h-full flex items-center justify-center'>
				<div className='bg-white rounded-3xl flex flex-col w-96 px-8 py-7 gap-9 m-4'>
					<Link href={'/'} className='flex items-center gap-4 w-52'>
						<LogoSvg fill={'#000'} />
						<LogoText className={inter.className}>WiseIndie</LogoText>
					</Link>
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
					<Formik
						initialValues={{
							username: '',
							password: '',
							email: '',
						}}
						validate={valuesInputs => {
							const ERRORS_MESSAGES = {};
							const EMAILS_DB_AUTH = userDb.map(data => data.email);

							// validación Username
							if (!valuesInputs.username) {
								ERRORS_MESSAGES.username = 'Please enter a username';
							} else if (
								!/^[a-zA-Z0-9À-ÿ\s]{1,40}$/.test(valuesInputs.username)
							) {
								ERRORS_MESSAGES.username =
									'The name can only contain letters, spaces and numbers.';
							}

							// validación Email
							if (!valuesInputs.email) {
								ERRORS_MESSAGES.email = 'Please enter an email';
							} else if (
								!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
									valuesInputs.email
								)
							) {
								ERRORS_MESSAGES.email =
									'The email can only contain letters, numbers, periods, hyphens and underscores.';
							} else if (EMAILS_DB_AUTH.includes(valuesInputs.email)) {
								ERRORS_MESSAGES.email = 'This email address is already in use';
							}

							// validación Password
							if (!valuesInputs.password) {
								ERRORS_MESSAGES.password = 'Please enter an password';
							} else if (
								!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(
									valuesInputs.password
								)
							) {
								ERRORS_MESSAGES.password =
									'Minimum 8 and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number, and one special character:';
							}

							return ERRORS_MESSAGES;
						}}
						onSubmit={async (valuesInputs, { resetForm }) => {
							resetForm();
							try {
								const { data, error } = await supabase.auth.signUp({
									email: valuesInputs.email,
									password: valuesInputs.password,
									options: {
										data: {
											name: valuesInputs.username,
										},
									},
								});
								const emails = userDb.map(data => data.email);
								if (error) {
									console.error(error);
								} else if (
									userDb.length === 0 ||
									!emails.includes(data.data?.user?.email)
								) {
									await insertUserData(
										valuesInputs.username,
										valuesInputs.email,
										valuesInputs.password,
										data
									);
									router.push('/');
								} else {
									console.error('El usuario ya existe');
								}
							} catch (error) {
								console.error(error);
							}
						}}
					>
						{({ errors }) => (
							<Form className='flex flex-col gap-4'>
								<Input
									id='username'
									label={'Username'}
									type={'text'}
									name={'username'}
									placeholder={'mathew05-2'}
								/>
								<ErrorMessage
									name='username'
									component={() => (
										<div className='text-red-500 text-xs'>
											{errors.username}
										</div>
									)}
								/>
								<Input
									id='email'
									label={'Email'}
									type={'text'}
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
										<div className='text-red-500 text-xs'>
											{errors.password}
										</div>
									)}
								/>
								<button className='w-full px-1 py-2 rounded-md box-border text-center text-white bg-black text-xs font-semibold outline focus:outline-4 focus:outline-gray-400 '>
									CONTINUE
								</button>
							</Form>
						)}
					</Formik>
					<p className='text-xs text-gray-500'>
						Have an account?
						<a className='text-black mx-2' href='/signin'>
							Sign in
						</a>
					</p>
				</div>
			</section>
		</>
	);
};

export default SingUp;
