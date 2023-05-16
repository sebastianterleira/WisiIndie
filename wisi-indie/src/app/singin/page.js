'use client';
import { useState } from 'react';
import { supabase } from '../../../supabase/client';

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
	};

	return (
		<div>
			<h1>SingIn</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					name='email'
					placeholder='youremail@gmail.com'
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					type='password'
					name='password'
					placeholder='********'
					onChange={e => setPassword(e.target.value)}
				/>
				<button>Send</button>
			</form>
		</div>
	);
};

export default SingIn;
