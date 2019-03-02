import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cats: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ cats: users }));
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
    if (this.state.cats.length === 0) {
      return <h3>Loading...</h3>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>CuteCatFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList cats={filteredCats} />
        </div>
      );
    }
  }
}

export default App;
