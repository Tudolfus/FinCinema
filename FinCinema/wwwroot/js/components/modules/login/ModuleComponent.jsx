import React, { Component } from 'react';
import Button from '../../ui/Button';

export default class ModuleComponent extends Component {
    render() {
        return <Button onClick={()=>alert('boy')}>Войти</Button>;
    }
}