import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should call handleOnClick when button is clicked', () => {
    console.log = jest.fn(); // mock console.log

    render(<App />);
    const button = screen.getByText(/calculate/i);

    fireEvent.click(button);

    expect(console.log).toHaveBeenCalledWith('Clicked');
  });

  it('should call handleOnChange when input is changed', () => {
    console.log = jest.fn(); // mock console.log

    render(<App />);
    const input = screen.getByPlaceholderText(/enter value/i);

    fireEvent.change(input, { target: { value: '1234' } });

    expect(console.log).toHaveBeenCalledWith('1234');
  });
});