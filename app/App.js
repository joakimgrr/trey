import React, { Component } from 'react';

import Screen from './components/Screen/Screen.js';

/**
 * dont require with webpack since electron is resolved in electron runtime
 * http://stackoverflow.com/questions/34427446
 */
const ipc = window.require('electron').ipcRenderer;

console.log('ipc: ', ipc)

import './App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            screens: []
        }

        // request app data from electron main process main.js
        ipc.send('get-app-data');

        // main process responds with application data
        ipc.on('app-data', (event, data) => {
            console.log('react received data: ', data)

            this.setState({screens: data.screens});
        })
    }

    render() {

        let screens = this.state.screens.length && this.state.screens.map((screen) => {
            return <Screen dimensions={screen.bounds}/>
        });

        return (
            <div>
                {screens}
                <h1> Hello, world. </h1>
            </div>
        );
    }
}
