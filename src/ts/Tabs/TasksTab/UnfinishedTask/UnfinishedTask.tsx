import React from "react";
import { TaskProp } from "../TasksTab";
import "./UnfinishedTaskStyles.less";

export const UnfinishedTask: React.FC<TaskProp> = (props) => {
    return (
        <div className="UnfinishedTask shadowed">
            <div className="checkCircle clickScaleBig"></div>
            <div className="textDetails">
                {props.task.group && <p className="taskGroup">- {props.task.group.name} -</p>}
                <h2 className="taskTitle">{props.task.name}</h2>
                <p className="taskTime">{props.task.time}</p>
            </div>
        </div>
    );
};
