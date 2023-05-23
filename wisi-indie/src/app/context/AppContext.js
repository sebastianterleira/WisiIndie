'use client';
import { createContext, useContext, useState } from 'react';
import { supabase } from '../../../supabase/client';
import { encrypt } from '../utils/handlePassword';

export const AppContext = createContext();
export const useIdea = () => {
	const context = useContext(AppContext);

	if (!context)
		throw new Error('useIdea must be used within a TaskContextProvider');
	return context;
};

export const IdeaContextProvider = ({ children }) => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || false
	);

	const onSession = async () => {
		const session = (await supabase.auth.getUser()).data?.user;
		localStorage.setItem('user', JSON.stringify(session));
		setUser(session);
	};

	// Create Idea POST
	const createIdea = async description => {
		const user = (await supabase.auth.getUser()).data.user;

		try {
			const { data } = await supabase
				.from('Ideas')
				.insert({
					description,
					userId: user.id,
				})
				.select();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const insertUserData = async (username, email, password, result) => {
		const newPassword = await encrypt(password);
		const { data, error } = await supabase
			.from('User')
			.insert({
				email,
				password: newPassword,
				username,
			})
			.eq('id', result.data.user.id)
			.select();
		console.log(data);
		console.log(error);
	};

	return (
		<AppContext.Provider
			value={{ createIdea, insertUserData, user, onSession }}
		>
			{children}
		</AppContext.Provider>
	);
};
