import React, { useState } from "react";
import { GroupHandler } from "../../../Model/GroupHandler";
import { Task } from "../../../Model/Task";
import { TaskHandler } from "../../../Model/TaskHandler";
import { DropDown } from "../../GenericComponents/DropDown/DropDown";
import { TextInput } from "../../GenericComponents/TextInput/TextInput";
import { GenericScreenButtons } from "../GenericScreen/GenericScreen";
import "./AddTaskScreenStyles.less";

export const AddTaskScreen: React.FC<AddTaskProps> = (props) => {
    let nameInputRef: React.RefObject<TextInput> = React.createRef();
    let selectedGroupTextRef: React.RefObject<HTMLParagraphElement> = React.createRef();
    let groupDropDownRef: React.RefObject<DropDown> = React.createRef();

    let task: Task | undefined = props.getTask();

    let onFinish = (finalTask: Task | undefined) => {
        let willClose: boolean = true;
        let willAdd: boolean = false;

        if (!finalTask) {
            finalTask = { name: "", finished: false, time: "", group: undefined };
            willAdd = true;
        }

        if (nameInputRef.current) {
            let value: string = nameInputRef.current.getValue();
            if (value == "") {
                alert("Input a name!");
                willClose = false;
            } else {
                finalTask.name = value;
            }
        }

        if (willClose) {
            if (willAdd) TaskHandler.taskList.push(finalTask);
            props.closeScreen();
            TaskHandler.taskListChange();
        }
    };

    const [ifGroupSelecting, changeIfGroupSelectingState] = useState(false);

    let getGroupNames: () => string[] = () => {
        return GroupHandler.groupList.map((group) => group.name);
    };

    return (
        <div className="AddTaskScreen">
            <div className="nameInputDiv">
                <p className="title">Name:</p>
                <TextInput ref={nameInputRef} defaultValue={task ? task.name : ""}></TextInput>
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
                        selectedGroupTextRef.current!.innerText = value;
                    }}
                    getNames={getGroupNames}
                    onClose={() => {
                        changeIfGroupSelectingState(false);
                    }}
                ></DropDown>
            )}
            <GenericScreenButtons
                mainTitle={task ? "Save" : "Create"}
                secondaryTitle={"Cancel"}
                mainOnClick={() => {
                    onFinish(task);
                }}
                secondaryOnClick={props.closeScreen}
            ></GenericScreenButtons>
        </div>
    );
};

export interface AddTaskProps {
    closeScreen: () => void;
    getTask: () => Task | undefined;
}
