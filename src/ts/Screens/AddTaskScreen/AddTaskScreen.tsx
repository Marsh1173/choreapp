import React from "react";
import "./AddTaskScreenStyles.less";

export const AddTaskScreen: React.FC<AddTaskProps> = (props) => {
    const onCreate = () => {
        props.closeScreen();
    };

    return (
        <div className="AddTaskScreen">
            <input className="nameInput" type="text" />
            <div className="buttonsDiv">
                <button className="cancelButton clickScaleBig" onMouseUp={() => props.closeScreen()}>
                    Cancel
                </button>
                <button className="createButton clickScaleBig" onMouseUp={() => onCreate()}>
                    Create
                </button>
            </div>
        </div>
    );
};

export interface AddTaskProps {
    closeScreen: () => void;
}
