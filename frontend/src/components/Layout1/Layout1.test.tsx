import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout1 from './Layout1';

describe('<Layout1 />', () => {
  test('it should mount', () => {
    render(<Layout1 />);

    const layout1 = screen.getByTestId('Layout1');

    expect(layout1).toBeInTheDocument();
  });
});