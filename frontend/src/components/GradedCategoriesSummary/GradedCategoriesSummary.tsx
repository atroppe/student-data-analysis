import React, { FC } from 'react';
import { GradedCategoriesSummaryWrapper } from './GradedCategoriesSummary.styled';

interface GradedCategoriesSummaryProps {}

const GradedCategoriesSummary: FC<GradedCategoriesSummaryProps> = () => (
 <GradedCategoriesSummaryWrapper data-testid="GradedCategoriesSummary">
    GradedCategoriesSummary Component
 </GradedCategoriesSummaryWrapper>
);

export default GradedCategoriesSummary;
