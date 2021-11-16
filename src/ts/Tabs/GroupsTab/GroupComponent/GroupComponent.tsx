import React from "react";
import { GroupProp } from "../GroupsTab";
import "./GroupComponentStyles.less";

export const GroupComponent: React.FC<GroupProp> = (props) => {
    let memberNames: JSX.Element[] = props.group.members.map((memberName) => {
        return <p className="memberName">{memberName}</p>;
    });

    return (
        <fieldset className="GroupComponent shadowed clickScale">
            <legend className="groupTitle">{props.group.name}</legend>
            {memberNames}
        </fieldset>
    );
};
