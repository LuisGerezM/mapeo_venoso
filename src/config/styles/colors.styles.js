export const colors = {
	betweenBlueGreed: 'hsla(187, 97%, 29%, 1)',
	blue: 'hsl(208, 92%, 53%)',
	brightRed: 'hsl(356, 69%, 56%)',
	darkDesaturatedBlue: 'hsl(228, 28%, 20%)',
	golden: 'hsl(38, 54%, 57%)',
	gray: 'hsl(230, 22%, 74%)',
	darkGray: 'hsl(228, 12%, 44%)',
	green: 'hsl(146, 68%, 55%)',
	lightBlue: 'hsl(203, 89%, 53%)',
	lightGray: 'hsl(216, 0%, 71%)',
	LimeGreen: 'hsl(163, 72%, 41%)',
	red: 'hsl(348, 97%, 39%)',
	veryDarkBlue: 'hsl(232, 19%, 15%)',
	white: 'hsl(0, 0%, 100%)',
};

export const colorsStyle = {
	lightColorsTheme: {
		background: colors.white,
		primaryColor: colors.darkDesaturatedBlue,
		secondaryColor: colors.darkGray,
		boxShadow: colors.darkGray,
		blue: colors.lightBlue,
		red: colors.brightRed,
		borderTheme: '1px solid hsl(228, 28%, 20%)',
		darkBlueTheme: colors.veryDarkBlue,
		greenTheme: colors.LimeGreen,
		warningYellow: colors.golden,
	},
	darkColorsTheme: {
		background: colors.darkDesaturatedBlue,
		primaryColor: colors.white,
		secondaryColor: colors.gray,
		boxShadow: colors.gray,
		blue: colors.blue,
		red: colors.red,
		borderTheme: `1px solid ${colors.darkGray}`,
		darkBlueTheme: colors.veryDarkBlue,
		greenTheme: colors.green,
		warningYellow: colors.golden,
	},
};