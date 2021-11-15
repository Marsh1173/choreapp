import React from "react";
import { getNextKey } from "../../main";
import "./DropDownStyles.less";

export const DropDown: React.FC<DropDownProps> = (props) => {
    let items: JSX.Element[] = props.names.map((item) => {
        return (
            <p
                key={getNextKey()}
                onMouseUp={() => {
                    props.onSelect(item);
                    props.onClose();
                }}
            >
                {item}
            </p>
        );
    });

    return (
        <div className="DropDown">
            <div className="dropdownBackground" onMouseUp={() => props.onClose()}></div>
            <div className="menu shadowed">{items}</div>
        </div>
    );
};

export interface DropDownProps {
    names: string[];
    onSelect: (value: string) => void;
    onClose: () => void;
}
