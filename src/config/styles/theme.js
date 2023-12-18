import { ThemeProvider } from 'styled-components';
import { responsive } from './responsive';

const theme = {
	alert: {
		// ERROR ALERT
		errorBackground: '#FFEBED',
		errorBorder: '#CB013A',
		errorFontColor: '#CB013A',
		// WARNING ALERT
		warningBackground: '#FFF7EE',
		warningBorder: '#FFA947',
		warningFontColor: '#FFA947',
		// SUCCESS ALERT
		successBackground: '#EBFFEF',
		successBorder: '#29CC6A',
		successFontColor: '#29CC6A',
	},
	loading: {
		color: '#285392',
	},
	// HEADER
	header: {
		background: '#ECECEC',
	},
	navBar: {
		background: 'linear-gradient(0deg, #285392, #285392)',
		links: '#ffffff',
		btnLogOut: '#ffffff',
	},
	// FOOTER
	footer: {
		background: '#2A2A2A',
		links: '#ffffff',
	},
	// LOGIN PAGE
	loginPage: {
		backgroundPage: '#ECECEC',
		background: '#F5F5F5',
		btnDisabled: '#E1E1E1',
		btnActive: '#3A86FF',
		titleColor: props => props.theme.colors.secondaryAzureDark700,
		loginSubtitle: props => props.theme.colors.primaryNight,
	},
	// HOME PAGE
	homePage: {
		background: '#FFFFFF',
	},
	// GENERAL COLORS
	colors: {
		white: '#FFFFFF',
		primaryNight: '#051549',
		primaryRed: '#FE1155',
		secondaryAzure: '#3A86FF',
		secondaryAzureDark700: '#003FA3',
		secondaryAzureLight100: '#ebf2ff',
		secundaryGreen: '#29cc6a',
		neutralGrey: '#68717D',
		neutralGreyLight: '#E1E1E1',
		neutralGreyLight100: '#FAFAFA',
		neutralGreyLight200: '#E4E4E4',
		neutralGreyDark: '#333333',
		neutralGreyDark400: '#4a4a4a',
		neutralGreyDark600: '#767676',
		persianGreen: '#06B49A',
		lightBlue: '#AFDBD2',
		onyx: '#36313D',
		blue: '#0000EE',
		error: '#cb013a',
		greyDisabled: '#b6b7be',
		springGreen: '#29CC6A',
	},
	// FONTS
	fonts: ['sans-serif', 'Roboto'],
	fontSizes: {
		small: '0.8rem',
		medium: '1rem',
		large: '2rem',
	},
	// MEDIA SIZE
	responsive,
};

function Theme({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
