import { useThemeApp } from './hooks/useThemeApp.hook';
import { GlobalStyle } from './config/styles/global.styles';
import { MapeoVenosoView } from './mapeoVenoso/presentation';

function App() {
	const { Theme } = useThemeApp();

	return (
		<Theme>
			<GlobalStyle />
			<MapeoVenosoView />
		</Theme>
	);
}

export default App;
