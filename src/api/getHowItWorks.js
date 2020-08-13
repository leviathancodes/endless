const getHowItWorks = async () => {
    const response = await fetch('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge');
    const data = await response.json();
    console.log(data);
    data.sort((a, b) => (a.stepNumber > b.stepNumber) ? 1 : -1);
    return data;
};

export default getHowItWorks;