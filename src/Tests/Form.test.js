import Form from '../Components/Form';
import { render, screen, fireEvent } from '@testing-library/react';

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


    test('submit button should be called', () => {
        const onSubmit = jest.fn();
        render(<Form handleSubmit={onSubmit} />);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(onSubmit).toHaveBeenCalled();
    });

    test('submit button should be called correctly', () => {
        const onSubmit = jest.fn();
        render(<Form handleSubmit={onSubmit} />);

        const input = screen.getByPlaceholderText('Enter any year');
        const button = screen.getByRole('button');

        fireEvent.change(input, { target: { value: '2025' } });
        fireEvent.click(button);

        expect(onSubmit).toHaveBeenCalled();
    });

});