import { screenSizes } from './screen';

export const responsive = {
	xs: `(max-width: ${screenSizes.xsMax}px)`,
	sm: `(min-width: ${screenSizes.smMin}px) and (max-width: ${screenSizes.smMax}px)`,
	md: `(min-width: ${screenSizes.mdMin}px) and (max-width: ${screenSizes.mdMax}px)`,
	lg: `(min-width: ${screenSizes.lgMin}px) and (max-width: ${screenSizes.lgMax}px)`,
	xl: `(min-width: ${screenSizes.xlMin}px)`,
};
