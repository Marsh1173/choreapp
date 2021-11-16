import React, { useState } from "react";
import { DropDown } from "../../GenericComponents/DropDown/DropDown";
import { TextInput } from "../../GenericComponents/TextInput/TextInput";
import "./AddTaskScreenStyles.less";

export const AddTaskScreen: React.FC<AddTaskProps> = (props) => {
    let nameInputRef: React.RefObject<TextInput> = React.createRef();
    let selectedGroupTextRef: React.RefObject<HTMLParagraphElement> = React.createRef();
    let groupDropDownRef: React.RefObject<DropDown> = React.createRef();

    const onCreate = () => {
        if (nameInputRef.current) {
            let value: string = nameInputRef.current.getValue();
            if (value == "") {
                alert("Input a name!");
            } else {
                console.log(value);
                props.closeScreen();
            }
        }
    };

    const [ifGroupSelecting, changeIfGroupSelectingState] = useState(false);

    let getGroupNames: () => string[] = () => {
        return names;
    };

    return (
        <div className="AddTaskScreen">
            <div className="nameInputDiv">
                <p className="title">Name:</p>
                <TextInput ref={nameInputRef}></TextInput>
            </div>
            <hr></hr>
            <div className="timeDiv">
                <p className="title">Due by:</p>
                <input className="timeInput" type="time"></input>
            </div>
            <div className="timeDiv">
                <p className="title">On:</p>
                <input className="dateInput" type="date"></input>
            </div>
            <hr></hr>
            <div className="groupDiv">
                <p className="title">Group:</p>
                <div className="selectedGroup" onMouseUp={() => changeIfGroupSelectingState(true)}>
                    <p ref={selectedGroupTextRef}>None</p>
                </div>
            </div>
            {ifGroupSelecting && (
                <DropDown
                    ref={groupDropDownRef}
                    onSelect={(value: string) => {
                        names.push("here");
                        selectedGroupTextRef.current!.innerText = value;
                    }}
                    getNames={getGroupNames}
                    onClose={() => {
                        changeIfGroupSelectingState(false);
                    }}
                ></DropDown>
            )}
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

const names: string[] = ["None", "Roomates", "Family"];
