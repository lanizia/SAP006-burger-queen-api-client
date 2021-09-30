import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Tests for Button component', () => {
  it('should render a button with the text provided', () => {
    const text = 'Text Name';
    render(<Button>{text}</Button>);
    const btn = screen.getByText(text);
    expect(btn).toBeInTheDocument();
  });

  it('should call a function when clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    const btn = screen.getByRole('button');
    expect(onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});