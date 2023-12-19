import { screenSizesStyle } from './screenSizes.styles';

export const responsiveDesignStyle = {
	xs: `(max-width: ${screenSizesStyle.xsMax}px)`,
	sm: `(min-width: ${screenSizesStyle.smMin}px) and (max-width: ${screenSizesStyle.smMax}px)`,
	md: `(min-width: ${screenSizesStyle.mdMin}px) and (max-width: ${screenSizesStyle.mdMax}px)`,
	lg: `(min-width: ${screenSizesStyle.lgMin}px) and (max-width: ${screenSizesStyle.lgMax}px)`,
	xl: `(min-width: ${screenSizesStyle.xlMin}px)`,
};
