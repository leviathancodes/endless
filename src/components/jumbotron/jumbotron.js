import React from 'react';
import styled from 'styled-components';
import GetStarted from './getStarted';

const Container = styled.div`    
    display: flex;

    background-image: url('https://i.ibb.co/YbQBq6f/photo-couch.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 25% 25%;
    width: 100vw;
    height: 100vh;
    margin-top: auto;
    margin-bottom: auto;
    position: relative;

    @media (max-width: 1028px) {
        background-size: cover;
        height: 70vh;
      }
`;

const TextContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-left: 128px;
    padding-bottom: 64px;
    overflow: auto;

    @media (max-width: 1028px) {
        padding: 0 0 48px 24px;
      }
`;

const Title = styled.h1`
    color: white;
    margin: 10px 0 10px 0;
    font-size: 48px;
    font-weight: 300;

    @media (max-width: 1028px) {
        font-size: 24px;
      }
`;

const Paragraph = styled.p`
    color: white;
    width: 27%;
    font-size: 16px;

    
    @media (max-width: 1028px) {
        width: 90%;
      }
`;


const Jumbotron = () => {
    return <Container>
        <TextContainer>
            <Paragraph>New Games & Acccessories</Paragraph>
            <Title>Monthly packages.</Title>
            <Title>Excitement delivered daily.</Title>
            <Paragraph>What's the best way to shop for the latest video games and peripherals?  How about never shopping at all?  You'll get new stuff on your doorstep - every month.</Paragraph>
            <GetStarted margin="16px 0 0 0"/>
        </TextContainer>
    </Container>
}

export default Jumbotron;