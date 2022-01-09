import React from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Card from './components/UI/Card';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
