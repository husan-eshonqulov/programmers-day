import DetDate from '../Components/DetDate';
import App from '../Components/App';
import { render, screen } from '@testing-library/react';

describe('<DetDate />', () => {
    test('initial result-date-info should be empty', () => {
        render(<App />);
        const date = screen.getByTestId('res-date');

        expect(date.textContent).toBe('');
    });

    test('does detDate component work correctly', () => {
        render(<DetDate year='2021' />);
        const date = screen.getByTestId('res-date');

        expect(date.textContent).toBe('13 September , 2021 Monday');
    });

    test('does detDate component work correctly', () => {
        render(<DetDate year='2020' />);
        const date = screen.getByTestId('res-date');

        expect(date.textContent).toBe('12 September , 2020 Saturday');
    });

    test('does detDate component work correctly', () => {
        render(<DetDate year='2022' />);
        const date = screen.getByTestId('res-date');

        expect(date.textContent).toBe('13 September , 2022 Tuesday');
    });

    test('does detDate component work correctly', () => {
        render(<DetDate year='1941' />);
        const date = screen.getByTestId('res-date');

        expect(date.textContent).toBe('13 September , 1941 Saturday');
    });

    test('does detDate component work correctly', () => {
        render(<DetDate year='2317' />);
        const date = screen.getByTestId('res-date');

        expect(date.textContent).toBe('13 September , 2317 Thursday');
    });

    test('does detDate component work correctly', () => {
        render(<DetDate year='1600' />);
        const date = screen.getByTestId('res-date');

        expect(date.textContent).toBe('12 September , 1600 Saturday');
    });

    test('does detDate component work correctly', () => {
        render(<DetDate year='2400' />);
        const date = screen.getByTestId('res-date');

        expect(date.textContent).toBe('12 September , 2400 Friday');
    });
})