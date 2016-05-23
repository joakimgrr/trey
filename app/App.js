import React, { Component } from 'react';

import Screens from './containers/Screens/Screens.js';

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
        return (
            <div>
                <Screens screens={this.state.screens} />
            </div>
        );
    }
}
