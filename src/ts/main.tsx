import React, { Component, createElement } from "react";
import ReactDOM from "react-dom";

class MainDiv extends Component<{}, {}> {
    render() {
        return (
            <div className="Main">
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
            </div>
        );
    }
}

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(MainDiv), domContainer);
