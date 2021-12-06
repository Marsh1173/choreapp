import React from "react";
import { TaskProp } from "../TasksTab";
import "./FinishedTaskStyles.less";

export const FinishedTask: React.FC<TaskProp> = (props) => {
    return (
        <div className="FinishedTask shadowed clickScale">
            <img className="checkImg" src="images/checkBlue.png"></img>
            <h2 className="taskTitle">{props.task.name}</h2>
        </div>
    );
};
