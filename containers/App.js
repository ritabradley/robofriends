import React, { Component } from 'react';
import CardList from '../src/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

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
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (cats.length === 0) {
      return <h3>Loading...</h3>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>CuteCatFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList cats={filteredCats} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
