import React from "react";
import "./GenericScreenStyles.less";

export const GenericScreen: React.FC<GenericScreenProps> = (props) => {
    return (
        <div className="GenericScreen fade-in">
            <div className="container">{props.element}</div>
        </div>
    );
};

export interface GenericScreenProps {
    element: JSX.Element;
}
