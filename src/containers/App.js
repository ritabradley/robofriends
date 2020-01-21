import React, { Component } from 'react';

class App extends Component {
    constructor(params) {
        super();

        this.state = {
            string: 'Rita Bradley'
        };
    }

    render() {
        return <div className='App container font-sans'>Hello! My name is {this.state.string}</div>;
    }
}

export default App;
