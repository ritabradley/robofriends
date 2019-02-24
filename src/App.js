import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { cats } from './cats';

const App = () => {
  return (
    <div className='tc'>
      <h1>CuteCatFriends</h1>
      <SearchBox />
      <CardList cats={cats} />
    </div>
  );
};

export default App;
