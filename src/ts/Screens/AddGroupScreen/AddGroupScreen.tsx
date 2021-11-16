import React from "react";
import { TextInput } from "../../GenericComponents/TextInput/TextInput";
import "./AddGroupScreenStyles.less";

export const AddGroupScreen: React.FC<AddGroupProps> = (props) => {
    let nameInputRef: React.RefObject<TextInput> = React.createRef();

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

    return (
        <div className="AddGroupScreen">
            <div className="nameInputDiv">
                <p className="title">Name:</p>
                <TextInput ref={nameInputRef}></TextInput>
            </div>
            <hr></hr>
            <div className="memberInputDiv">
                <pre>{"  "}- Members -</pre>
                <p className="title">@Me</p>
                <p>
                    @<TextInput></TextInput>
                </p>
                <button className="addPersonButton clickScaleBig">Add Person</button>
            </div>

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

export interface AddGroupProps {
    closeScreen: () => void;
}
