import React from "react";
import { getNextKey } from "../../../main";
import { GroupProp } from "../GroupsTab";
import "./GroupComponentStyles.less";

export const GroupComponent: React.FC<GroupProp> = (props) => {
    let memberNames: JSX.Element[] = props.group.members.map((memberName) => {
        return (
            <p className="memberName major-text" key={getNextKey()}>
                {memberName}
            </p>
        );
    });

    return (
        <fieldset className="GroupComponent shadowed" style={{border: "2px solid " + props.group.color}}>
            <legend className="groupTitle major-text" style={{border: "2px solid " + props.group.color}}>
                {props.group.name}
                <div className="editIcon clickScaleBig">
                    <img src="/images/edit.png"></img>
                </div>
            </legend>
            {memberNames}
        </fieldset>
    );
};
