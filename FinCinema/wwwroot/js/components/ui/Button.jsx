import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    _btnOnClick = () => {
        const { onClick } = this.props;

        if (onClick) {
            onClick();
        }
    }

    render() {
        return <button onClick={this._btnOnClick}>{this.props.children}</button>;
    }
}