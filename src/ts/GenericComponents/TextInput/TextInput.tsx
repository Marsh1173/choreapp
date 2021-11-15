import React from "react";
import { ChangeEvent } from "react";

interface TextInputState {
    inputValue?: string;
}

export class TextInput extends React.Component<{}, TextInputState> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputValue: "",
        };
    }

    render() {
        return <input className="TextInput" value={this.state.inputValue} onChange={(e) => this.updateInputValue(e)} autoComplete="off" />;
    }

    updateInputValue(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            inputValue: e.target.value,
        });
    }

    getValue(): string {
        if (this.state.inputValue) {
            return this.state.inputValue;
        } else {
            return "";
        }
    }
}
