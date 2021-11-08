import React, { Component, createElement } from "react";
import ReactDOM from "react-dom";
import { TestScroller } from "./testScroll";

class MainDiv extends Component<{}, {}> {
    render() {
        return (
            <div className="Main">
                <TestScroller></TestScroller>
                <button
                    onClick={() => {
                        window.navigator.vibrate(1000);
                    }}
                >
                    Click me!
                </button>
            </div>
        );
    }
}

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(MainDiv), domContainer);
