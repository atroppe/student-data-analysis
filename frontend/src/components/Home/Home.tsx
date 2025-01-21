import React, { FC } from 'react';
import { HomeWrapper } from './Home.styled';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
 <HomeWrapper data-testid="Home">
    Home Component
 </HomeWrapper>
);

export default Home;
