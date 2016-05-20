import React, { Component } from 'react';

import './Screen.scss';

export default class Screen extends Component {

    static propTypes = {
        dimensions: React.PropTypes.object.isRequired
    }

    static defaultProps = {
        dimensions: {
            width: '',
            height: ''
        }
    }

    render() {
        return (
            <div className="screen">
                <div className="screen__display">
                    <p className="screen__text">
                        {this.props.dimensions.width} x {this.props.dimensions.height}
                    </p>
                </div>
                <div className="screen__mount"></div>
                <div className="screen__lowermount"></div>
            </div>
        );
    }
}
