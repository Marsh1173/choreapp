import React from "react";
import { Component, ReactNode } from "react";
import { getNextKey } from "../../../main";
import "./RadioComponentStyles.less";

export class RadioComponent extends Component<RadioComponentProps, RadioComponentState> {
    constructor(props: RadioComponentProps) {
        super(props);

        if (this.props.index) {
            this.state = { index: this.props.index };
        } else {
            this.state = { index: 0 };
        }
    }
    render(): ReactNode {
        let elems: JSX.Element[] = [];
        for (let i: number = 0; i < this.props.options.length; i++) {
            elems.push(
                <button className={`${this.state.index == i ? "selected" : ""}`} onMouseDown={() => this.selectOne(i)} key={getNextKey()}>
                    {this.props.options[i]}
                </button>,
            );
        }

        return <div className="RadioComponent">{elems}</div>;
    }

    private selectOne(index: number) {
        this.setState({ index });
    }

    public getIndex(): number {
        return this.state.index;
    }
}

export interface RadioComponentProps {
    index?: number;
    options: string[];
}

export interface RadioComponentState {
    index: number;
}
