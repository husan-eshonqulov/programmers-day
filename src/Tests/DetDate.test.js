import DetDate from '../Components/DetDate';
import App from '../Components/App';
import { render, screen } from '@testing-library/react';

describe('DetDate', () => {
    test('initial result date info should be empty', () => {
        render(<App />);
        const date = screen.getByTestId('res-date');

        expect(date.textContent).toBe('');
    });

    // test('result date info', () => {
    //     const onSubmit = jest.fn();

    //     render(<DetDate year />)
    // });
})