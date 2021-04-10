import DetDate from '../Components/DetDate';
import App from '../Components/App';
import { render, screen } from '@testing-library/react';

describe('<DetDate />', () => {
    test('initial result-date-info should be empty', () => {
        render(<App />);
        const date = screen.getByTestId('res-date');

        expect(date.textContent).toBe('');
    });

    test('is detDate component work correctly', () => {
        render(<DetDate year='2020' />);
        const element = screen.getByTestId('res-date');

        console.log(element.children);

        // expect(element.children).toBe();
    });
})