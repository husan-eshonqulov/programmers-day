import '../Components/Header';
import { render, screen } from '@testing-library/react';
import Header from '../Components/Header';

describe('Header', () => {
    test('Header is not empty', () => {
        render(<Header />);
        const heading = screen.getByTestId('heading');

        expect(heading.textContent).not.toHaveLength(0);
    });


    // test('Header\'s textcontent is the same heading', () => {
    //     render(<Header />);
    //     const heading = screen.getByTestId('heading');

    //     expect(heading.textContent).toBe('Programmers Day');
    // });

});