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
            <div className="extraButtons">
                {props.copyOnClick && (
                    <button className="copyButton clickScaleBig" onMouseUp={props.copyOnClick}>
                        Copy
                    </button>
                )}
                {props.deleteOnClick && (
                    <button className="deleteButton clickScaleBig" onMouseUp={props.deleteOnClick}>
                        Delete
                    </button>
                )}
            </div>

            <div className="standardButtons">
                <button className="secondaryButton clickScaleBig" onMouseUp={props.secondaryOnClick}>
                    {props.secondaryTitle}
                </button>
                <button className="mainButton clickScaleBig" onMouseUp={props.mainOnClick}>
                    {props.mainTitle}
                </button>
            </div>
        </div>
    );
};

export interface GenericScreenButtonProps {
    mainTitle: string;
    mainOnClick: () => void;
    secondaryTitle: string;
    secondaryOnClick: () => void;
    deleteOnClick?: () => void;
    copyOnClick?: () => void;
}
