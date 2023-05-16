'use client';
import { createContext, useContext } from 'react';

export const AppContext = createContext();
export const useIdea = () => {
	const context = useContext(AppContext);

	if (!context)
		throw new Error('useIdea must be used within a TaskContextProvider');
	return context;
};

export const IdeaContextProvider = ({ children }) => {
	const array = ['Hola', 'Mundo'];
	return (
		<AppContext.Provider value={{ array }}>{children}</AppContext.Provider>
	);
};
