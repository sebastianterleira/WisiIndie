'use client';
import { useState } from 'react';
import { supabase } from '../../../supabase/client';

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
		<div>
			<h1>SingUp</h1>
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

export default SingUp;
