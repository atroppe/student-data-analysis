import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GradedCategoriesSummary from './GradedCategoriesSummary';

describe('<GradedCategoriesSummary />', () => {
  test('it should mount', () => {
    render(<GradedCategoriesSummary />);

    const gradedCategoriesSummary = screen.getByTestId('GradedCategoriesSummary');

    expect(gradedCategoriesSummary).toBeInTheDocument();
  });
});