import React, { useState } from "react";
import { TextInput } from "../../GenericComponents/TextInput/TextInput";
import "./AddTaskScreenStyles.less";

export const AddTaskScreen: React.FC<AddTaskProps> = (props) => {
    let nameInputRef: React.RefObject<TextInput> = React.createRef();

    const onCreate = () => {
        if (nameInputRef.current) {
            let value: string = nameInputRef.current.getValue();
            if (value == "") {
                alert("Input a name");
            } else {
                console.log(value);
                props.closeScreen();
            }
        }
    };

    const [ifGroup, changeIfGroupState] = useState(true);

    return (
        <div className="AddTaskScreen">
            <div className="nameInputDiv">
                <p className="nameTitle">Name:</p>
                <TextInput ref={nameInputRef}></TextInput>
            </div>
            <div className="groupDiv">
                <div className="ifGroupSelector">
                    <p className={`${ifGroup == true ? "selected" : ""}`} onMouseUp={() => changeIfGroupState(true)}>
                        Group
                    </p>
                    <p className={`${ifGroup == false ? "selected" : ""}`} onMouseUp={() => changeIfGroupState(false)}>
                        No Group
                    </p>
                </div>
                {ifGroup && <div className="groupSelector">Sup</div>}
            </div>
            <div className="timeDiv"></div>
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
