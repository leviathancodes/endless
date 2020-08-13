import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    color: #2F3237;
    text-transform: uppercase;
    font-weight: 500;
`;

const Container = styled.div`
    display: inline-block;
    padding: 8px 32px 8px 32px;
    background-color: ${props => props.theme.color.primary};
    transition: all 0.3s;
    border-radius: 16px;
    margin: ${props => props.containerMargin};
    &:hover {
        background-color: #339e87;
        cursor: pointer;
    }
`

const GetStarted = ({ margin }) => {
    return (
        <Container containerMargin={margin}>
            <Text>Get Started</Text>
        </Container>
    )
}

export default GetStarted;