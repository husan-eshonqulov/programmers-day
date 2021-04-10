import App from '../Components/App';
import Form from '../Components/Form';
import DetDate from '../Components/DetDate';

import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
    test('input\'s initial value should be empty', () => {
        render(<Form />);
        const input = screen.getByPlaceholderText('Enter any year');

        expect(input.value).toBe('');
    });

    test('updates on change for input', () => {
        render(<Form />);
        const input = screen.getByPlaceholderText('Enter any year');

        fireEvent.change(input, { target: { value: '2021' } });

        expect(input.value).toBe('2021');
    });
});