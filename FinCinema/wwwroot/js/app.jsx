import React from 'react';
import ReactDOM from 'react-dom';
import ModuleComponent from './components/modules/login/ModuleComponent';

class Hello extends React.Component {
    render() {
        return <>
            <h1>Привет, Иннокентий</h1>
            <ModuleComponent />
        </>;
    }
}
ReactDOM.render(
    <Hello />,
    document.getElementById("content")
);