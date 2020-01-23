import React, { Component } from 'react';
import CardList from '../components/CardList';
const URL = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
    constructor(params) {
        super();

        this.state = {
            cats: []
        };
    }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then(users => this.setState({ cats: users }))
            .catch(err => console.log(`Something went wrong: ${err}`));
    }

    render() {
        const { cats } = this.state;
        return (
            <div className='App container mx-auto px-4 font-sans'>
                <CardList cats={cats}></CardList>
            </div>
        );
    }
}

export default App;
