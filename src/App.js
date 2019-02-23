import React from 'react';
import CardList from './CardList';
import { cats } from './cats';

const App = () => {
  return (
    <>
      <h1>CuteCatFriends</h1>
      <CardList cats={cats} />
    </>
  );
};

export default App;
