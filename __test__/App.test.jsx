import App from '@/App';
import { cleanup, render, screen } from '@testing-library/react';

describe('Grupo de pruebas de ejemplo', () => {
	test('Una prueba unitaria de algo', () => {
		expect(10).toBe(10);
	});

	test('render text with Vite template', () => {
		render(<App />);

		const viteTemplateText = screen.getByText(/App/i);

		expect(viteTemplateText).toBeInTheDocument();
	});
});
