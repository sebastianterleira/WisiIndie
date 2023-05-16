'use client';
import { useState } from 'react';
import { supabase } from '../../../supabase/client';
import Input from '../components/subComponents/input/input';
import LogoSvg from '../components/AllSvgs';
import styled from 'styled-components';
import ButtonOauth from '../components/subComponents/buttonOauth/buttonOauth';

const LogoText = styled.p`
	font-family: 'Inter variable', sans-serif;
	font-style: normal;
	font-weight: 900;
	font-size: 30px;
	line-height: 30px;
	cursor: default;
`;

const SingUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const result = await supabase.auth.signUp({
				email,
				password,
			});
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	};

	return (
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
						// onChange={e => setEmail(e.target.value)}
					/>
					<Input
						label={'Email'}
						type={'email'}
						name={'email'}
						placeholder={'youremail@gmail.com'}
						onChange={e => setEmail(e.target.value)}
					/>
					<Input
						label={'Password'}
						type={'password'}
						name={'password'}
						placeholder={'**********'}
						onChange={e => setPassword(e.target.value)}
					/>
					<button className='w-full px-1 py-2 rounded-md box-border text-center text-white bg-black text-xs font-semibold outline focus:outline-4 focus:outline-gray-400 '>
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
	);
};

export default SingUp;
