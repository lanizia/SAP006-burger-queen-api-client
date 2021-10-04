import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from './input';

describe('Testing input component', () => {
    it('should render the input component', () => {
        render(<Input />)
    });

    it('should show the input placeholder content on the screen', () => {
        const placeholder = 'jesus cristo';
        render(<Input placeholder={placeholder} />)
        expect(screen.getAllByPlaceholderText('jesus cristo')).toBeTruthy()
    });

    it('should have the onChange functionality', () => {
        const onChange = jest.fn()
        render(<Input onChange={onChange} />)
    });
})