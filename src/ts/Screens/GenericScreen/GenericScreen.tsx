import React from "react";
import "./GenericScreenStyles.less";

export const GenericScreen: React.FC<GenericScreenProps> = (props) => {
    return (
        <div className="GenericScreen">
            <div className="container fade-in">
                <h1>{props.title}</h1>
                {props.element}
            </div>
        </div>
    );
};

export interface GenericScreenProps {
    element: JSX.Element;
    title: string;
}

export const GenericScreenButtons: React.FC<GenericScreenButtonProps> = (props) => {
    return (
        <div className="GenericScreenButtons">
            <button className="secondaryButton clickScaleBig" onMouseUp={props.secondaryOnClick}>
                {props.secondaryTitle}
            </button>
            <button className="mainButton clickScaleBig" onMouseUp={props.mainOnClick}>
            {props.mainTitle}
            </button>
        </div>
    );
};

export interface GenericScreenButtonProps {
    mainTitle: string;
    mainOnClick: () => void;
    secondaryTitle: string;
    secondaryOnClick: () => void;
}
