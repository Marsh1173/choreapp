import React, { useState } from "react";
import { GroupHandler } from "../../../Model/GroupHandler";
import { Task } from "../../../Model/Task";
import { TaskHandler } from "../../../Model/TaskHandler";
import { DropDown } from "../../GenericComponents/DropDown/DropDown";
import { TextInput } from "../../GenericComponents/TextInput/TextInput";
import { GenericScreenButtons } from "../GenericScreen/GenericScreen";
import { getNextId } from "../../../Model/Id";
import "./AddTaskScreenStyles.less";
import { Group } from "../../../Model/Group";
import { putLeadingZeros } from "../../main";
import { RepeatDaysComponent } from "./RepeatDaysComponent/RepeatDaysComponent";

export const AddTaskScreen: React.FC<AddTaskProps> = (props) => {
    let nameInputRef: React.RefObject<TextInput> = React.createRef();
    let selectedGroupTextRef: React.RefObject<HTMLParagraphElement> = React.createRef();
    let groupDropDownRef: React.RefObject<DropDown> = React.createRef();

    //due refs
    let dateDueRef: React.RefObject<HTMLInputElement> = React.createRef();
    let timeDueRef: React.RefObject<HTMLInputElement> = React.createRef();
    //repeat
    let repeatDaysRef: React.RefObject<RepeatDaysComponent> = React.createRef();

    let task: Task | undefined = props.getTask();

    let onFinish = (finalTask: Task | undefined) => {
        let willClose: boolean = true;
        let willAdd: boolean = false;

        if (!finalTask) {
            finalTask = {
                name: "",
                id: getNextId(),
                finished: false,
                time: undefined,
                group: undefined,
                growInAnimation: false,
                ifRotates: false,
                repeatIndex: 0,
            };
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

        //group
        let groupString: string = selectedGroupName;
        let group: Group | undefined = GroupHandler.getGroupByName(groupString);
        finalTask.group = group;

        if (group) {
            finalTask.ifRotates = ifRotating;
        } else {
            finalTask.ifRotates = false;
        }

        //repeats
        finalTask.repeatIndex = repeatDaysRef.current!.getIndex();

        if (willClose) {
            if (willAdd) TaskHandler.taskList.push(finalTask);
            finalTask.growInAnimation = true;
            props.closeScreen();
            TaskHandler.taskListChange();
        }
    };

    const [ifGroupSelecting, changeIfGroupSelectingState] = useState(false);
    const [selectedGroupName, changeSelectedGroupName] = useState(task && task.group ? task.group.name : "None");
    const [ifRotating, changeIfRotating] = useState(task ? task.ifRotates : false);
    let getGroupNames: () => string[] = () => {
        let names: string[] = ["None"];
        names = names.concat(GroupHandler.groupList.map((group) => group.name));
        return names;
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
                    <input
                        ref={dateDueRef}
                        className="dateInput"
                        type="date"
                        defaultValue={
                            task && task.time
                                ? task.time.getFullYear() + "-" + putLeadingZeros(task.time.getMonth() + 1) + "-" + putLeadingZeros(task.time.getDate())
                                : ""
                        }
                    ></input>
                </div>
                <div className="timeDiv">
                    <p className="title">By:</p>
                    <input
                        ref={timeDueRef}
                        className="timeInput"
                        type="time"
                        defaultValue={
                            task && task.time
                                ? putLeadingZeros(task.time.getHours()) +
                                  ":" +
                                  putLeadingZeros(task.time.getMinutes()) +
                                  ":" +
                                  putLeadingZeros(task.time.getSeconds())
                                : ""
                        }
                    ></input>
                </div>
                <hr></hr>
                <div className="groupDiv">
                    <p className="title">Group:</p>
                    <div className="selectedGroup" onMouseUp={() => changeIfGroupSelectingState(true)}>
                        <p ref={selectedGroupTextRef}>{selectedGroupName}</p>
                    </div>
                </div>
                {selectedGroupName != "None" && (
                    <p
                        className={`rotateText ${ifRotating ? "selected" : ""}`}
                        onMouseUp={() => {
                            changeIfRotating(!ifRotating);
                        }}
                    >
                        Rotates Members
                    </p>
                )}
                {ifGroupSelecting && (
                    <DropDown
                        ref={groupDropDownRef}
                        onSelect={(value: string) => {
                            changeSelectedGroupName(value);
                        }}
                        getNames={getGroupNames}
                        onClose={() => {
                            changeIfGroupSelectingState(false);
                        }}
                    ></DropDown>
                )}
                <hr></hr>
                <div className="repeatDiv">
                    <p className="title">Repeats every:</p>
                    <RepeatDaysComponent ref={repeatDaysRef} repeatIndex={task?.repeatIndex}></RepeatDaysComponent>
                </div>
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
