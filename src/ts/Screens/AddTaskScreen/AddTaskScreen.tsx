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
import { RadioComponent } from "./RadioComponent/RadioComponent";

export const AddTaskScreen: React.FC<AddTaskProps> = (props) => {
    let nameInputRef: React.RefObject<TextInput> = React.createRef();
    let selectedGroupTextRef: React.RefObject<HTMLParagraphElement> = React.createRef();
    let groupDropDownRef: React.RefObject<DropDown> = React.createRef();

    //due refs
    let dateDueRef: React.RefObject<HTMLInputElement> = React.createRef();
    let timeDueRef: React.RefObject<HTMLInputElement> = React.createRef();
    //repeat
    let repeatDaysRef: React.RefObject<RadioComponent> = React.createRef();

    //group rotate ref
    let groupRotateRef: React.RefObject<RadioComponent> = React.createRef();

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
                groupAssignmentIndex: 0,
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
            finalTask.groupAssignmentIndex = groupRotateRef.current!.getIndex();
        } else {
            finalTask.groupAssignmentIndex = 0;
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
    //const [ifRotating, changeIfRotating] = useState(task ? task. : false);
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
                {selectedGroupName != "None" && (
                    <div className="repeatDiv">
                        <p className="title">Assigned to:</p>
                        <RadioComponent ref={groupRotateRef} index={task?.groupAssignmentIndex} options={["Me", "Rotates", "Everyone"]}></RadioComponent>
                    </div>
                )}
                <hr></hr>
                <div className="repeatDiv">
                    <p className="title">Repeats every:</p>
                    <RadioComponent ref={repeatDaysRef} index={task?.repeatIndex} options={["Never", "Day", "Week", "Month"]}></RadioComponent>
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
