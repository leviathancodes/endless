import React from 'react';
import styled from 'styled-components';
import img from '../../assets/logo-endless.svg';

const Container = styled.div`
    height: 10vh;
    background-color: ${props => props.theme.color.darkGrey};
    display: flex;
    align-items: center;
    
`;

const Logo = styled.img`
padding-left: 128px;
    width: 15%;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 1028px) {
        padding-left: 48px;
        width: 40%;
      }
`;


const Header = () => {
    return (
    <Container id="header">
        <Logo src={img}/>
    </Container>
    )
}

export default Header;