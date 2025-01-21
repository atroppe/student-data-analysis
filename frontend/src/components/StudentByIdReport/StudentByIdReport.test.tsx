import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StudentByIdReport from './StudentByIdReport';

describe('<StudentByIdReport />', () => {
  test('it should mount', () => {
    render(<StudentByIdReport />);

    const studentByIdReport = screen.getByTestId('StudentByIdReport');

    expect(studentByIdReport).toBeInTheDocument();
  });
});