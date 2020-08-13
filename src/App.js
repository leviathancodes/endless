import React from 'react';
import HomePage from './pages/homePage';
import GlobalStyle from './themes/globalStyle';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
