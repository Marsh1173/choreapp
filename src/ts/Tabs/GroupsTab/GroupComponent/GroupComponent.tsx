import React, { useState } from "react";
import { getNextKey } from "../../../main";
import { GroupProp } from "../GroupsTab";
import "./GroupComponentStyles.less";

export const GroupComponent: React.FC<GroupProp> = (props) => {
    let memberNames: JSX.Element[] = props.group.members.map((memberName) => {
        return (
            <p className="memberName major-text" key={getNextKey()}>
                @{memberName}
            </p>
        );
    });

    memberNames.unshift(
        <p className="memberName major-text" key={getNextKey()}>
            @n8rz
        </p>,
    );

    const [visible, changeVisibility] = useState(props.group.visible);

    return (
        <fieldset className="GroupComponent" style={{ border: "2px solid " + props.group.color }}>
            <legend className="groupTitle major-text" style={{ border: "2px solid " + props.group.color }}>
                {props.group.name}
            </legend>
            {memberNames}
            <div className="extraButtons">
                <div
                    className="makeVisibleButton clickScaleBig"
                    onMouseUp={() => {
                        props.group.visible = !props.group.visible;
                        changeVisibility(props.group.visible);
                    }}
                >
                    {visible && <img src="/images/view.png"></img>}
                    {!visible && <img src="/images/hidden.png"></img>}
                </div>
                <div className="editIcon clickScaleBig" onMouseUp={props.onEdit}>
                    <img src="/images/edit.png"></img>
                </div>
            </div>
        </fieldset>
    );
};
