import React, { useState } from "react";
import { GroupHandler } from "../../../Model/GroupHandler";
import { Task } from "../../../Model/Task";
import { TaskHandler } from "../../../Model/TaskHandler";
import { DropDown } from "../../GenericComponents/DropDown/DropDown";
import { TextInput } from "../../GenericComponents/TextInput/TextInput";
import { GenericScreenButtons } from "../GenericScreen/GenericScreen";
import { getNextId } from "../../../Model/Id";
import "./AddTaskScreenStyles.less";

export const AddTaskScreen: React.FC<AddTaskProps> = (props) => {
    let nameInputRef: React.RefObject<TextInput> = React.createRef();
    let selectedGroupTextRef: React.RefObject<HTMLParagraphElement> = React.createRef();
    let groupDropDownRef: React.RefObject<DropDown> = React.createRef();

    //due refs
    let dateDueRef: React.RefObject<HTMLInputElement> = React.createRef();
    let timeDueRef: React.RefObject<HTMLInputElement> = React.createRef();

    let task: Task | undefined = props.getTask();

    let onFinish = (finalTask: Task | undefined) => {
        let willClose: boolean = true;
        let willAdd: boolean = false;

        if (!finalTask) {
            finalTask = { name: "", id: getNextId(), finished: false, time: undefined, group: undefined, growInAnimation: false };
            willAdd = true;
        }

        //name
        if (nameInputRef.current) {
            let value: string = nameInputRef.current.getValue();
            if (value == "") {
                alert("Input a name!");
                willClose = false;
            } else {
                finalTask.name = value;
            }
        }

        //date
        let date: string = dateDueRef.current!.value;
        let time: string = timeDueRef.current!.value;

        if (date != "" && time != "") {
            let dateObj: Date = new Date(date + " " + time);
            finalTask.time = dateObj;
        } else {
            finalTask.time = undefined;
        }

        if (willClose) {
            if (willAdd) TaskHandler.taskList.push(finalTask);
            finalTask.growInAnimation = true;
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
            <div className="dataDiv">
                <div className="nameInputDiv">
                    <p className="title">Name:</p>
                    <TextInput ref={nameInputRef} defaultValue={task ? task.name : ""}></TextInput>
                </div>
                <hr></hr>
                <div className="timeDiv">
                    <p className="title">Due on:</p>
                    <input ref={dateDueRef} className="dateInput" type="date"></input>
                </div>
                <div className="timeDiv">
                    <p className="title">By:</p>
                    <input ref={timeDueRef} className="timeInput" type="time"></input>
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
            </div>

            <GenericScreenButtons
                mainTitle={task ? "Save" : "Create"}
                secondaryTitle={"Cancel"}
                mainOnClick={() => {
                    onFinish(task);
                }}
                secondaryOnClick={props.closeScreen}
                deleteOnClick={
                    task
                        ? () => {
                              TaskHandler.taskList = TaskHandler.taskList.filter((listTask) => listTask.id != task!.id);
                              props.closeScreen();
                              TaskHandler.taskListChange();
                          }
                        : undefined
                }
                copyOnClick={
                    task
                        ? () => {
                              let copyTask = Object.assign({}, task);
                              copyTask.id = getNextId();
                              TaskHandler.taskList.push(copyTask);
                              props.closeScreen();
                              TaskHandler.taskListChange();
                          }
                        : undefined
                }
            ></GenericScreenButtons>
        </div>
    );
};

export interface AddTaskProps {
    closeScreen: () => void;
    getTask: () => Task | undefined;
}
