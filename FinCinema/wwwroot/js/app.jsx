﻿class Hello extends React.Component {
    render() {
        return <h1>Привет, Никита</h1>;
    }
}
ReactDOM.render(
    <Hello />,
    document.getElementById("content")
);