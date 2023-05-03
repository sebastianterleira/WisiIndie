'use client';
import { ThemeProvider } from 'styled-components';
import { DefaultStyles } from './components/themes';


export default function App() {
	return (
		<main>
			<ThemeProvider theme={DefaultStyles}>
			</ThemeProvider>
		</main>
	);
}
