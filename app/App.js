import React, { Component } from 'react';

import Screen from './components/Screen/Screen.js';

import './App.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                <Screen />
                <h1> Hello, world. </h1>
            </div>
        );
    }
}
