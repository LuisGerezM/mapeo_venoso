import { colorsStyle, colors } from './colors.styles';
import { typographyStyles } from './typography.styles';
import { responsiveDesignStyle } from './responsiveDesign.styles';

const otherProperties = {
	typography: { ...typographyStyles },
	allColors: { ...colors },
	responsive: { ...responsiveDesignStyle },
};

export const themeStyle = {
	light: { name: 'light', colorsByTheme: colorsStyle.lightColorsTheme, ...otherProperties },
	dark: { name: 'dark', colorsByTheme: colorsStyle.darkColorsTheme, ...otherProperties },
};
