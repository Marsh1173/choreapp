import React from "react";
import { Component, ReactNode } from "react";
import "./RepeatDaysComponentStyles.less";

export class RepeatDaysComponent extends Component<RepeatDaysComponentProps, RepeatDaysComponentState> {
    constructor(props: RepeatDaysComponentProps) {
        super(props);

        if (this.props.repeatIndex) {
            this.state = { repeatIndex: this.props.repeatIndex };
        } else {
            this.state = { repeatIndex: 0 };
        }
    }
    render(): ReactNode {
        return (
            <div className="RepeatDaysComponent">
                <button className={`${this.state.repeatIndex == 0 ? "selected" : ""}`} onMouseDown={() => this.selectOne(0)}>
                    Never
                </button>
                <button className={`${this.state.repeatIndex == 1 ? "selected" : ""}`} onMouseDown={() => this.selectOne(1)}>
                    Day
                </button>
                <button className={`${this.state.repeatIndex == 2 ? "selected" : ""}`} onMouseDown={() => this.selectOne(2)}>
                    Week
                </button>
                <button className={`${this.state.repeatIndex == 3 ? "selected" : ""}`} onMouseDown={() => this.selectOne(3)}>
                    Month
                </button>
            </div>
        );
    }

    private selectOne(index: number) {
        this.setState({ repeatIndex: index });
    }

    public getIndex(): number {
        return this.state.repeatIndex;
    }
}

export interface RepeatDaysComponentProps {
    repeatIndex?: number;
}

export interface RepeatDaysComponentState {
    repeatIndex: number;
}
