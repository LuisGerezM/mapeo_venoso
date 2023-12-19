import styled from 'styled-components';

const MapeoVenosoView = () => {
	return (
		<Container>
			mapeo venoso view
			<br />
			<Prueba>Configurando estilos</Prueba>
		</Container>
	);
};

export default MapeoVenosoView;

const Container = styled.div`
	${({ theme }) => theme.typography.titleCssStyle}
	transition: 0.5s;
`;

const Prueba = styled.p`
	${({ theme }) => theme.typography.subtitleCssStyle}
`;
