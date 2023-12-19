import { css } from 'styled-components';

const fontFamily = "'Rubik', sans-serif";
const defaultColor = css`
	color: ${({ theme }) => theme.colorsByTheme.primaryColor};
`;

const typography = {
	mobileTitlesStyled: () => css`
		font: 700 40px/40px ${fontFamily};
	`,
	mobileSsubTitlesStyled: () => css`
		font: 400 16px/16px ${fontFamily};
	`,
	mobileInputTexts: () => css`
		font: 400 13px/14px ${fontFamily};
	`,
	mobileSmallTexts: () => css`
		font: 300 11px/20px ${fontFamily};
	`,
	titlesStyled: () => css`
		font: 700 64px/76px ${fontFamily};
	`,
	subTitlesStyled: () => css`
		font: 400 20px/20px ${fontFamily};
	`,
	desktopInputTexts: () => css`
		font: 300 15px/19px ${fontFamily};
	`,
	desktopButtonTexts: () => css`
		font: 600 16px/19px ${fontFamily};
	`,
	desktopSmallTexts: () => css`
		font: 300 14px/20px ${fontFamily};
	`,
};

const typographyStyles = {
	titleCssStyle: css`
		${typography.mobileTitlesStyled()}

		${defaultColor}

		@media ${({ theme }) => theme.responsive.md} {
			${typography.titlesStyled()}
		}

		@media ${({ theme }) => theme.responsive.lg} {
			${typography.titlesStyled()}
		}

		@media ${({ theme }) => theme.responsive.xl} {
			${typography.titlesStyled()}
		}
	`,
	subtitleCssStyle: css`
		${typography.mobileSsubTitlesStyled()}
		line-height: 30px !important;

		color: ${({ theme }) => theme.colorsByTheme.secondaryColor};

		@media ${({ theme }) => theme.responsive.md} {
			${typography.subTitlesStyled()}
		}

		@media ${({ theme }) => theme.responsive.lg} {
			${typography.subTitlesStyled()}
		}

		@media ${({ theme }) => theme.responsive.xl} {
			${typography.subTitlesStyled()}
		}
	`,
	inputTextCssStyle: css`
		${typography.mobileInputTexts()}

		${defaultColor}

		@media ${({ theme }) => theme.responsive.md} {
			${typography.desktopInputTexts()}
		}

		@media ${({ theme }) => theme.responsive.lg} {
			${typography.desktopInputTexts()}
		}

		@media ${({ theme }) => theme.responsive.xl} {
			${typography.desktopInputTexts()}
		}
	`,
	smallTextCssStyle: css`
		${typography.mobileSmallTexts()};

		${defaultColor}

		@media ${({ theme }) => theme.responsive.lg} {
			${typography.desktopSmallTexts()};
		}

		@media ${({ theme }) => theme.responsive.xl} {
			${typography.desktopSmallTexts()};
		}
	`,
};

export { typographyStyles };
