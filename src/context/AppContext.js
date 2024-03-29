'use client';
import { createContext, useContext, useState } from 'react';
import { supabase } from '../../supabase/client';
import { encrypt } from '../utils/handlePassword';

export const AppContext = createContext();
export const useIdea = () => {
	const context = useContext(AppContext);

	if (!context)
		throw new Error('useIdea must be used within a TaskContextProvider');
	return context;
};

export const IdeaContextProvider = ({ children }) => {
	const [userDb, setUserDb] = useState([]);
	const [dataIdea, setDataIdea] = useState([]);

	const getUserDabase = async () => {
		const { data, error } = await supabase.from('user').select();
		if (error) throw error;
		setUserDb(data);
	};

	// GET data Idea
	const getDataIdea = async () => {
		const { data, error } = await supabase.from('Ideas').select();
		if (error) throw error;
		setDataIdea(data);
	};

	// Create Idea POST
	const createIdea = async description => {
		const user = (await supabase.auth.getUser()).data.user;

		console.log(user);

		try {
			const { data } = await supabase
				.from('Ideas')
				.insert({
					autor: user.user_metadata.name,
					description,
					userId: user.id,
				})
				.select();
			console.log(data);
			setDataIdea([...dataIdea, ...data]);
		} catch (error) {
			console.log(error);
		}
	};

	const insertUserData = async (username, email, password, result) => {
		const newPassword = await encrypt(password);
		const { data, error } = await supabase
			.from('user')
			.insert({
				username,
				email,
				password_encrypted: newPassword,
				password,
				id: result?.data?.user.id,
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
				getUserDabase,
				getDataIdea,
				setDataIdea,
				dataIdea,
				userDb,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
