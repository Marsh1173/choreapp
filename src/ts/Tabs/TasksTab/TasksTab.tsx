import React, { useEffect, useState } from "react";
import "./TasksTabStyles.less";
import { FinishedTask } from "./FinishedTask/FinishedTask";
import { UnfinishedTask } from "./UnfinishedTask/UnfinishedTask";
import { Task } from "../../../Model/Task";
import { TaskHandler } from "../../../Model/TaskHandler";
import { getNextKey, putLeadingZerosOnStr } from "../../main";
import { GenericScreen } from "../../Screens/GenericScreen/GenericScreen";
import { AddTaskScreen } from "../../Screens/AddTaskScreen/AddTaskScreen";

export var currentTask: Task = {
    name: "",
    id: -10,
    finished: false,
    time: undefined,
    group: undefined,
    growInAnimation: false,
    ifRotates: false,
    repeatIndex: 0,
};

export const TasksTab: React.FC<{}> = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        TaskHandler.taskListObservers.push({
            onTaskListChange: () => {
                setValue((value) => value + 1);
            },
        });
    }, []);

    const [isAddingTask, changeIfAddingTaskState] = useState(false);
    const changeIfAddingTask = (value: boolean) => {
        changeIfAddingTaskState(value);
    };
    const getSelectedTask: () => Task = () => {
        return currentTask;
    };
    const setSelectedTask: (task: Task) => void = (task: Task) => {
        currentTask = task;
    };

    const [isEditingTask, changeIfEditingTaskState] = useState(false);
    const changeIfEditingTask = (value: Task | undefined) => {
        if (value) {
            setSelectedTask(value);
            changeIfEditingTaskState(true);
        } else {
            changeIfEditingTaskState(false);
        }
    };

    let taskElements: JSX.Element[] = TaskHandler.getToDoTasks().map((task) => {
        return (
            <UnfinishedTask
                onEdit={() => {
                    changeIfEditingTask(task);
                }}
                task={task}
                key={getNextKey()}
                displayTime={getTaskTime(task)}
            ></UnfinishedTask>
        );
    });
    let finishedElements: JSX.Element[] = TaskHandler.getFinishedTasks().map((task) => {
        return <FinishedTask task={task} key={getNextKey()}></FinishedTask>;
    });
    let comingupElements: JSX.Element[] = TaskHandler.getComingUpTasks().map((task) => {
        return (
            <UnfinishedTask
                onEdit={() => {
                    changeIfEditingTask(task);
                }}
                task={task}
                key={getNextKey()}
                displayTime={getTaskDate(task)}
            ></UnfinishedTask>
        );
    });

    return (
        <div className="TasksTab">
            <div className="taskContainer fade-in">
                <div className="tasks">
                    <h1 className="major-text">Tasks</h1>
                    {taskElements}
                </div>
                <div className="coming-up">
                    <h1 className="major-text">Coming Up</h1>
                    {comingupElements}
                </div>
                <div className="finished">
                    <h1 className="major-text">Finished</h1>
                    {finishedElements}
                </div>
            </div>
            <div className="addButton shadowed clickScaleBig" onMouseUp={() => changeIfAddingTask(true)}>
                <img className="addIcon" src="./images/addBlue.png"></img>
            </div>
            {isAddingTask && (
                <div>
                    <GenericScreen
                        title={"New Task"}
                        element={<AddTaskScreen getTask={() => undefined} closeScreen={() => changeIfAddingTask(false)}></AddTaskScreen>}
                    ></GenericScreen>
                </div>
            )}
            {isEditingTask && (
                <div>
                    <GenericScreen
                        title={"Edit Task"}
                        element={<AddTaskScreen getTask={getSelectedTask} closeScreen={() => changeIfEditingTask(undefined)}></AddTaskScreen>}
                    ></GenericScreen>
                </div>
            )}
        </div>
    );
};

export interface UnfinishedTaskProp {
    task: Task;
    onEdit: () => void;
    displayTime: string;
}
export interface FinishedTaskProp {
    task: Task;
}

export var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getTaskTime(task: Task): string {
    if (task.time) {
        let hours: number = task.time.getHours();
        let minutes: string = task.time.getMinutes().toString();
        let ampm: string = "AM";
        let dateString: string = "";

        if (hours == 0) {
            hours += 12;
        } else if (hours >= 12) {
            ampm = "PM";
            if (hours >= 13) {
                hours -= 12;
            }
        }

        minutes = putLeadingZerosOnStr(minutes);

        let curDate: Date = new Date();
        if (curDate.getDate() > task.time.getDate() && curDate.getFullYear() >= task.time.getFullYear() && curDate.getMonth() >= task.time.getMonth()) {
            dateString = getTaskDate(task)! + " - ";
        }

        return dateString + hours + ":" + minutes + " " + ampm;
    } else {
        return "- no time -";
    }
}
function getTaskDate(task: Task): string {
    if (task.time) {
        return dayNames[task.time.getDay()] + ", " + monthNames[task.time.getMonth()] + " " + task.time.getDate() + " " + task.time.getFullYear();
    } else {
        return "";
    }
}
