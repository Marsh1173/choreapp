import React from "react";
import { ChangeEvent } from "react";

interface TextInputState {
    inputValue?: string;
}

export interface textInputProps {
    defaultValue?: string;
}

export class TextInput extends React.Component<textInputProps, TextInputState> {
    constructor(props: textInputProps) {
        super(props);
        this.state = {
            inputValue: this.props.defaultValue,
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
