import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { cats } from './cats';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cats,
      searchField: '',
    };
  }

  onSearchChange = e => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const filteredCats = this.state.cats.filter(cat => {
      return cat.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1>CuteCatFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList cats={filteredCats} />
      </div>
    );
  }
}

export default App;
