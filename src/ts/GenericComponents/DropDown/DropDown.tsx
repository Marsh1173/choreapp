import React, { Component } from "react";
import { getNextKey } from "../../main";
import "./DropDownStyles.less";

export class DropDown extends Component<DropDownProps> {
    constructor(props: DropDownProps) {
        super(props);
    }

    render() {
        let items: string[] = this.props.getNames();
        let itemElems: JSX.Element[] = items.map((item) => {
            return (
                <p
                    key={getNextKey()}
                    onMouseUp={() => {
                        this.props.onSelect(item);
                        this.props.onClose();
                    }}
                >
                    {item}
                </p>
            );
        });

        return (
            <div className="DropDown">
                <div className="dropdownBackground" onMouseUp={() => this.props.onClose()}></div>
                <div className="menu shadowed">{itemElems}</div>
            </div>
        );
    }
}

export interface DropDownProps {
    getNames: () => string[];
    onSelect: (value: string) => void;
    onClose: () => void;
}
