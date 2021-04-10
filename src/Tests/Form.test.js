import Form from '../Components/Form';
import { render, screen, fireEvent } from '@testing-library/react';

describe('<Form />', () => {
    test('input\'s initial value should be empty', () => {
        render(<Form />);
        const input = screen.getByPlaceholderText('Enter any year');

        expect(input.value).toBe('');
    });
    // I have a question for above test

    test('updates on change for input', () => {
        render(<Form />);
        const input = screen.getByPlaceholderText('Enter any year');

        fireEvent.change(input, { target: { value: '2021' } });

        expect(input.value).toBe('2021');
    });


    test('handleSubmit function should be called', () => {
        const onSubmit = jest.fn();
        render(<Form handleSubmit={onSubmit} />);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(onSubmit).toHaveBeenCalled();
    });

    test('handleSubmit function should be called when input\'s value updates', () => {
        const onSubmit = jest.fn();
        render(<Form handleSubmit={onSubmit} />);

        const input = screen.getByPlaceholderText('Enter any year');
        const button = screen.getByRole('button');

        fireEvent.change(input, { target: { value: '2025' } });
        fireEvent.click(button);

        expect(onSubmit).toHaveBeenCalled();
    });
});