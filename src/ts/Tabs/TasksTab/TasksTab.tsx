import React, { useState } from "react";
import "./TasksTabStyles.less";
import { FinishedTask } from "./FinishedTask/FinishedTask";
import { UnfinishedTask } from "./UnfinishedTask/UnfinishedTask";
import { Task } from "../../../Model/Task";
import { getNextKey } from "../../main";
import { GenericScreen } from "../../Screens/GenericScreen/GenericScreen";
import { AddTaskScreen } from "../../Screens/AddTaskScreen/AddTaskScreen";

export const TasksTab: React.FC<{}> = () => {
    const [isAddingTask, changeIfAddingTaskState] = useState(false);
    const changeIfAddingTask = (value: boolean) => {
        changeIfAddingTaskState(value);
    };

    const [isEditingTask, changeIfEditingTaskState] = useState(false);
    const changeIfEditingTask = (value: boolean) => {
        changeIfEditingTaskState(value);
    };

    let tasks: Task[] = [
        { name: "Write talk", finished: false, time: "Sunday, before 8:00am", group: undefined },
        { name: "Write talk", finished: false, time: "Sunday, before 8:00am", group: undefined },
    ];
    let finished: Task[] = [
        { name: "October Budget", finished: true, time: "Saturday, before 11:00am", group: undefined },
        { name: "October Budget", finished: true, time: "Saturday, before 11:00am", group: undefined },
    ];
    let comingup: Task[] = [
        { name: "Milestone 4", finished: false, time: "Nov 19th, before midnight", group: undefined },
        { name: "Milestone 4", finished: false, time: "Nov 19th, before midnight", group: undefined },
        { name: "Milestone 4", finished: false, time: "Nov 19th, before midnight", group: undefined },
    ];

    let taskElements: JSX.Element[] = tasks.map((task) => {
        return <UnfinishedTask task={task} key={getNextKey()}></UnfinishedTask>;
    });
    let finishedElements: JSX.Element[] = finished.map((task) => {
        return <FinishedTask task={task} key={getNextKey()}></FinishedTask>;
    });
    let comingupElements: JSX.Element[] = comingup.map((task) => {
        return <UnfinishedTask task={task} key={getNextKey()}></UnfinishedTask>;
    });

    return (
        <div className="TasksTab">
            <div className="taskContainer fade-in">
                <div className="tasks">
                    <h1>Tasks</h1>
                    {taskElements}
                </div>
                <div className="finished">
                    <h1>Finished</h1>
                    {finishedElements}
                </div>
                <div className="coming-up">
                    <h1>Coming Up</h1>
                    {comingupElements}
                </div>
            </div>
            <div className="addButton shadowed fade-in clickScaleBig" onClick={() => changeIfAddingTask(true)}>
                <img className="addIcon" src="./images/add.png"></img>
            </div>
            {isAddingTask && (
                <div>
                    <GenericScreen element={<AddTaskScreen closeScreen={() => changeIfAddingTask(false)}></AddTaskScreen>}></GenericScreen>
                </div>
            )}
            {isEditingTask && (
                <div>
                    <GenericScreen element={<AddTaskScreen closeScreen={() => changeIfEditingTask(false)}></AddTaskScreen>}></GenericScreen>
                </div>
            )}
        </div>
    );
};

export interface TaskProp {
    task: Task;
}
