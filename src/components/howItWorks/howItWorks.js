import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getHowItWorks from '../../api/getHowItWorks';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SubContainer = styled.div`
    width: 90%;
    flex-direction: column;

`;

const ListItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`;

const ListContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    margin: 2em 0 4em 0;

    @media (max-width: 1028px) {
        flex-direction: column;
      }

`;

const ListNumber = styled.h2`
    border-bottom: 5px solid ${props => props.theme.color.primary};
    display: inline-block;
    font-size: 48px;
    font-weight: 200;

    @media (max-width: 1028px) {
        margin-bottom: 8px;
    }

`;

const ListItemTitle = styled.h4`
    text-align: center;
    margin-top: 16px;
    text-transform: uppercase;
    font-weight: 600;
`;

const ListItemBody = styled.p`
    text-align: center;
    margin-top: 16px;
    width: 80%;

    @media (max-width: 1028px) {
        margin-top: 8px;
        margin-bottom: 24px;
    }
`;

const Title = styled.h1`
    text-align: center;
    font-weight: 400;
    margin: 1em 0 1em 0;
`;


const HowItWorks = () => {
    // Makes a fetch request to get info from API

    const [howItWorksData, setHowItWorksData] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const data = await getHowItWorks();
            setHowItWorksData(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    console.log(howItWorksData);

    const handleListItems = (data) => {
        return data.map(item => {
            const mostRecentDate = new Date(Math.max.apply(null, item.versionContent.map( e => {
                return (new Date(e.effectiveDate))
            })));

            const mostRecentObject = item.versionContent.filter(e => {
                const d = new Date(e.effectiveDate);
                return d.getTime() == mostRecentDate.getTime();
            })

            console.log(mostRecentObject)

            return (
                <ListItemContainer>
                    <ListNumber>{"0" + item.stepNumber}</ListNumber>
                    <ListItemTitle>{mostRecentObject[0].title}</ListItemTitle>
                    <ListItemBody>{mostRecentObject[0].body}</ListItemBody>
                </ListItemContainer>
            )
        })
    }


    return loading ? (
        <Title id="loading" aria-label="loading">Loading...</Title>
    ) : (
        <Container>
            <SubContainer>
                <Title>How It Works</Title>
                <ListContainer>
                    {howItWorksData && handleListItems(howItWorksData)}
                </ListContainer>
            </SubContainer>
        </Container>
    )
}

export default HowItWorks;