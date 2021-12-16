import React from "react";
import { ChangeEvent } from "react";

interface TextInputState {
    inputValue?: string;
}

export interface textInputProps {
    defaultValue?: string;
    placeHolder?: string;
    onChange?: (newVal: string) => void;
}

export class TextInput extends React.Component<textInputProps, TextInputState> {
    constructor(props: textInputProps) {
        super(props);
        this.state = {
            inputValue: this.props.defaultValue,
        };
    }

    render() {
        return (
            <input
                className="TextInput"
                value={this.state.inputValue}
                onChange={(e) => this.updateInputValue(e)}
                placeholder={this.props.placeHolder}
                autoComplete="off"
            />
        );
    }

    updateInputValue(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            inputValue: e.target.value,
        });
        if (this.props.onChange) this.props.onChange(e.target.value);
    }

    getValue(): string {
        if (this.state.inputValue) {
            return this.state.inputValue;
        } else {
            return "";
        }
    }
}
