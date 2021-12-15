import React from "react";
import { TaskHandler } from "../../../../Model/TaskHandler";
import { FinishedTaskProp } from "../TasksTab";
import "./FinishedTaskStyles.less";

export const FinishedTask: React.FC<FinishedTaskProp> = (props) => {
    let ifScaleIn: boolean = props.task.growInAnimation;
    props.task.growInAnimation = false;
    return (
        <div className={`FinishedTask shadowed ${ifScaleIn ? "scale-in" : ""}`}>
            <img
                className="checkImg clickScaleBig"
                src="images/checkBlue.png"
                onMouseUp={() => {
                    props.task.finished = false;
                    props.task.growInAnimation = true;
                    TaskHandler.taskListChange();
                }}
            ></img>
            <h2 className="taskTitle">{props.task.name}</h2>
        </div>
    );
};
