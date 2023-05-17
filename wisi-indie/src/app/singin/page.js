'use client';
import { useState } from 'react';
import { supabase } from '../../../supabase/client';
import Input from '../components/subComponents/input/input';
import LogoSvg from '../components/AllSvgs';
import styled from 'styled-components';
import Image from 'next/image';

const LogoText = styled.p`
	font-family: 'Inter variable', sans-serif;
	font-style: normal;
	font-weight: 900;
	font-size: 30px;
	line-height: 30px;
	cursor: default;
`;

const SingIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		const { error, data } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		console.log(data);
		if (error) {
			console.log(error);
		} else {
			// Redirigir a la página de inicio
			window.location.href = '/';
		}
		// console.log('testing');
	};

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
					<button className='group/edit  flex gap-4 item-center w-full px-3 py-3 rounded-md box-border text-black bg-white text-xs font-semibold outline outline-1 outline-gray-300 hover:bg-gray-100'>
						<span className='flex '>
							<Image src='./images/GithubIcon.svg' width={20} height={20} />
						</span>
						<div className='w-full flex items-center text-sm font-normal'>
							<span>Continue with GitHub</span>
						</div>
						<Image
							className='-translate-x-6 opacity-0  transition-all duration-400  group-hover/edit:translate-x-0  group-hover/edit:opacity-100'
							src='./images/ArrowRightIcon.svg'
							width={14}
							height={16}
						/>
					</button>
					<div className='flex items-center'>
						<div className='bg-gray-300 h-0.1 flex-1'></div>
						<span className='mx-2 text-xs'>OR</span>
						<div className='bg-gray-300 h-0.1 flex-1'></div>
					</div>
				</div>
				<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
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
