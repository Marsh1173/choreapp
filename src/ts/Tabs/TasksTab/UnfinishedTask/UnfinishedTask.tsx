import React from "react";
import { TaskHandler } from "../../../../Model/TaskHandler";
import { UnfinishedTaskProp } from "../TasksTab";
import "./UnfinishedTaskStyles.less";

export const UnfinishedTask: React.FC<UnfinishedTaskProp> = (props) => {
    let ifScaleIn: boolean = props.task.growInAnimation;
    props.task.growInAnimation = false;
    return (
        <div className={`UnfinishedTask shadowed ${ifScaleIn ? "scale-in" : ""}`}>
            <div
                className="checkCircle clickScaleBig"
                onMouseUp={() => {
                    props.task.finished = true;
                    props.task.growInAnimation = true;
                    TaskHandler.taskListChange();
                }}
            ></div>
            <div className="editIcon clickScaleBig" onMouseUp={props.onEdit}>
                <img src="/images/edit.png"></img>
            </div>
            <div className="textDetails">
                {props.task.group && (
                    <p className="taskGroup" style={{ color: props.task.group.color }}>
                        - {props.task.group.name} -
                    </p>
                )}
                <h2 className="bigger-text far-text">{props.task.name}</h2>
                <p className="minor-text far-text">{props.displayTime}</p>
            </div>
        </div>
    );
};
