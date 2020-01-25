import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
const URL = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
    constructor(params) {
        super();

        this.state = {
            cats: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then(users => this.setState({ cats: users }))
            .catch(err => console.log(`Something went wrong: ${err}`));
    }

    render() {
        const { cats, searchField } = this.state;
        const filteredCats = cats.filter(cat => cat.name.toLowerCase().includes(searchField.toLowerCase()));

        if (cats.length === 0) {
            return <h3 className='text-center text-2xl text-gray-600'>Loading cats...</h3>;
        } else {
            return (
                <div className='App container mx-auto px-4 font-sans'>
                    <h1 className='text-center text-4xl text-white font-bold header-font'>Cute Cat Friends</h1>
                    <SearchBox
                        searchField={e => {
                            this.setState({
                                searchField: e.target.value
                            });
                        }}
                        placeholder='Search for friends'
                    />
                    <CardList cats={filteredCats}></CardList>
                </div>
            );
        }
    }
}

export default App;
