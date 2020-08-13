import React from 'react';
import styled from 'styled-components';
import Jumbotron from '../components/jumbotron/jumbotron';
import HowItWorks from '../components/howItWorks/howItWorks';
const Container = styled.div`
    width: 100vw;
    overflow: hidden;
`;

const HomePage = () => {
return (
    <Container>
       <Jumbotron />
       <HowItWorks />
    </Container>
)
};

export default HomePage;