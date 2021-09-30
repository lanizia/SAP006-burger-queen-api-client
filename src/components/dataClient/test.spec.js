import React from 'react';
import {render} from '@testing-library/react';
import  DataClient  from './dataClient'; 

it('renders correctly', () => {
    const {queryByPlaceholderText} = render(<DataClient/>)
    
    expect(queryByPlaceholderText('Mariazinha')).toBeInTheDocument()
    expect(queryByPlaceholderText('1 a 10')).toBeTruthy()
})