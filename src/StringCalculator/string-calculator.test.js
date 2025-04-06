import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from './string-calculator';
import '@testing-library/jest-dom';

describe('StringCalculator component test cases', () => {
  test('renders and calculates sum correctly with given numbers', () => {
    render(<StringCalculator />);

    const textarea = screen.getByPlaceholderText('Enter value ...');
    const button = screen.getByText('Calculate');

    // User types into the textarea
    fireEvent.change(textarea, { target: { value: '5,10,15' } });

    // Click "Calculate" button
    fireEvent.click(button);

    // Check the calculated result
    expect(screen.getByText('Calculated Value: 30')).toBeInTheDocument();
  });

  test('handles empty input', () => {
    render(<StringCalculator />);

    const button = screen.getByText('Calculate');

    fireEvent.click(button);

    expect(screen.getByText('Calculated Value: 0')).toBeInTheDocument();
  });

  test('handles mixed string input with delimiter', () => {
    render(<StringCalculator />);

    const textarea = screen.getByPlaceholderText('Enter value ...');
    const button = screen.getByText('Calculate');

    fireEvent.change(textarea, { target: { value: '//;\n1;2' } });
    fireEvent.click(button);

    expect(screen.getByText('Calculated Value: 3')).toBeInTheDocument();
  });
});
