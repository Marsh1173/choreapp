import React from "react";
import { UnfinishedTaskProp } from "../TasksTab";
import "./UnfinishedTaskStyles.less";

export const UnfinishedTask: React.FC<UnfinishedTaskProp> = (props) => {
    return (
        <div className="UnfinishedTask shadowed">
            <div className="checkCircle clickScaleBig"></div>
            <div className="editIcon clickScaleBig" onMouseUp={props.onEdit}>
                <img src="/images/edit.png"></img>
            </div>
            <div className="textDetails">
                {props.task.group && (
                    <p className="taskGroup" style={{ color: props.task.group.color }}>
                        - {props.task.group.name} -
                    </p>
                )}
                <h2  className="major-text far-text">{props.task.name}</h2>
                <p className="minor-text far-text">{props.task.time}</p>
            </div>
        </div>
    );
};
