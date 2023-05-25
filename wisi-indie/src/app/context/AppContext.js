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
	const [userDb, setUserDb] = useState([]);

	const onSession = async () => {
		const session = (await supabase.auth.getUser()).data?.user;
		localStorage.setItem('user', JSON.stringify(session));
		setUser(session);
	};

	const getUserDabase = async () => {
		const { data, error } = await supabase.from('User').select('email');
		if (error) throw error;
		console.log(data);
		setUserDb(data);
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
				username,
				email,
				password: newPassword,
			})
			.select();
		console.log(data);
		console.log(error);
	};

	return (
		<AppContext.Provider
			value={{
				createIdea,
				insertUserData,
				user,
				onSession,
				getUserDabase,
				userDb,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
