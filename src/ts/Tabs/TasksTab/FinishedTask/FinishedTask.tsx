import React from "react";
import { FinishedTaskProp } from "../TasksTab";
import "./FinishedTaskStyles.less";

export const FinishedTask: React.FC<FinishedTaskProp> = (props) => {
    return (
        <div className="FinishedTask shadowed ">
            <img className="checkImg clickScaleBig" src="images/checkBlue.png"></img>
            <h2 className="taskTitle">{props.task.name}</h2>
        </div>
    );
};
