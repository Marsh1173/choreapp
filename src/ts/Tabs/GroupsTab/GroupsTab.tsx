import React, { useState } from "react";
import "./GroupsTabStyles.less";

import { groups } from "../../../DataAccessors/GenericGroups";
import { getNextKey } from "../../main";
import { GenericScreen } from "../../Screens/GenericScreen/GenericScreen";
import { Group } from "../../../Model/Group";
import { GroupComponent } from "./GroupComponent/GroupComponent";
import { AddTaskScreen } from "../../Screens/AddTaskScreen/AddTaskScreen";
import { AddGroupScreen } from "../../Screens/AddGroupScreen/AddGroupScreen";

export const GroupsTab: React.FC<{}> = () => {
    const [isAddingGroup, changeIfAddingGroupState] = useState(false);
    const changeIfAddingGroup = (value: boolean) => {
        changeIfAddingGroupState(value);
    };

    let groupElements: JSX.Element[] = groups.map((group) => {
        return <GroupComponent group={group} key={getNextKey()}></GroupComponent>;
    });

    return (
        <div className="GroupsTab">
            <div className="groupsContainer fade-in">
                <div className="groups">
                    <h1>Groups</h1>
                    {groupElements}
                </div>
            </div>
            <div className="addButton shadowed fade-in clickScaleBig" onMouseUp={() => changeIfAddingGroup(true)}>
                <img className="addIcon" src="./images/add.png"></img>
            </div>
            {isAddingGroup && (
                <div>
                    <GenericScreen element={<AddGroupScreen closeScreen={() => changeIfAddingGroup(false)}></AddGroupScreen>}></GenericScreen>
                </div>
            )}
        </div>
    );
};

export interface GroupProp {
    group: Group;
}
