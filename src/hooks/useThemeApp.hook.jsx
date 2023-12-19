import { themeStyle } from '@/config';
import { useState } from 'react';

import { ThemeProvider } from 'styled-components';

export const useThemeApp = () => {
	const [themeSelect, setThemeSelect] = useState('dark');
	const handleChangeTheme = value => setThemeSelect(value);

	function Theme({ children }) {
		return <ThemeProvider theme={themeStyle[themeSelect]}>{children}</ThemeProvider>;
	}

	return { Theme, themeSelect, handleChangeTheme };
};
