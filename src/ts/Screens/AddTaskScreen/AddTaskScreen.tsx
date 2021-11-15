import React from "react";
import { TextInput } from "../../GenericComponents/TextInput/TextInput";
import "./AddTaskScreenStyles.less";

export const AddTaskScreen: React.FC<AddTaskProps> = (props) => {
    let nameInputRef: React.RefObject<TextInput> = React.createRef();

    const onCreate = () => {
        if (nameInputRef.current) {
            console.log(nameInputRef.current.getValue());
        }
        props.closeScreen();
    };

    return (
        <div className="AddTaskScreen">
            <TextInput ref={nameInputRef}></TextInput>
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
