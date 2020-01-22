import React, { Component } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
    constructor(params) {
        super();

        this.state = {
            monsters: []
        };
    }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then(users => this.setState({ monsters: users }))
            .catch(err => console.log(`Something went wrong: ${err}`));
    }

    render() {
        return (
            <div className='App container mx-auto font-sans'>
                <ul className='text-center font-bold text-lg text-gray-700 list-none'>
                    {this.state.monsters.map((monster, i) =>
                        i % 2 === 0 ? (
                            <li key={monster.name} className='border border-gray-300'>
                                {monster.name}
                            </li>
                        ) : (
                            <li key={monster.name} className='border border-gray-300 bg-teal-100'>
                                {monster.name}
                            </li>
                        )
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
