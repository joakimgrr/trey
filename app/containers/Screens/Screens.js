import React, { Component } from 'react';

import Screen from '../../components/Screen/Screen';

import './Screens.scss';

export default class Screens extends Component {

    static propTypes = {
        screens: React.PropTypes.array.isRequired
    }

    static defaultProps = {
        screens: []
    }

    render() {
        let screens = this.props.screens.length && this.props.screens.map((screen) => {
            return (
                <div className="screens__single-container">
                    <Screen key={screen.id} dimensions={screen.bounds}/>
                </div>
            )
        });

        return (
            <div className="screens">
                {screens}
            </div>
        );
    }
}
