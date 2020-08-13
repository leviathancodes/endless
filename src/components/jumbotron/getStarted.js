import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    color: #2F3237;
    text-transform: uppercase;
    font-weight: 700;
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
        transform: translateY(-3px);
        &:active {
            transform: translateY(-1px);
            box-shadow: 0 .5rm 1rem rgba($color-black, .4);;
        }
    }
`

const GetStarted = ({ margin }) => {
    return (
        <Container id="getStartedButton" containerMargin={margin}>
            <Text>Get Started</Text>
        </Container>
    )
}

export default GetStarted;