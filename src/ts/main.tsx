import React, { Component, createElement } from "react";
import ReactDOM from "react-dom";
import { TestScroller } from "./testScroll";

class MainDiv extends Component<{}, {}> {
    render() {
        return (
            <div className="Main">
                <TestScroller></TestScroller>
            </div>
        );
    }
}

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(MainDiv), domContainer);
