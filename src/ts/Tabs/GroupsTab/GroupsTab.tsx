import React, { useEffect, useState } from "react";
import "./GroupsTabStyles.less";

import { getNextKey } from "../../main";
import { GenericScreen } from "../../Screens/GenericScreen/GenericScreen";
import { Group } from "../../../Model/Group";
import { GroupComponent } from "./GroupComponent/GroupComponent";
import { GroupHandler } from "../../../Model/GroupHandler";
import { GroupScreen } from "../../Screens/GroupScreen/GroupScreen";

export var currentGroup: Group = { name: "", id: -1, members: [], color: "#000000" };

export const GroupsTab: React.FC<{}> = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        GroupHandler.groupListObservers.push({
            onGroupListChange: () => {
                setValue((value) => value + 1);
            },
        });
    }, []);

    const [isAddingGroup, changeIfAddingGroupState] = useState(false);
    const changeIfAddingGroup = (value: boolean) => {
        changeIfAddingGroupState(value);
    };
    const [isEditingGroup, changeIfEditingGroupState] = useState(false);
    const changeIfEditingGroup = (value: Group | undefined) => {
        if (value) {
            setSelectedGroup(value);
            changeIfEditingGroupState(true);
        } else {
            changeIfEditingGroupState(false);
        }
    };

    const getSelectedGroup: () => Group = () => {
        return currentGroup;
    };
    const setSelectedGroup: (group: Group) => void = (group: Group) => {
        currentGroup = group;
    };

    let groupElements: JSX.Element[] = GroupHandler.groupList.map((group) => {
        return (
            <GroupComponent
                group={group}
                key={getNextKey()}
                onEdit={() => {
                    changeIfEditingGroup(group);
                }}
            ></GroupComponent>
        );
    });

    return (
        <div className="GroupsTab">
            <div className="groupsContainer fade-in">
                <div className="groups">
                    <h1 className="major-text">Groups</h1>
                    {groupElements}
                </div>
            </div>
            <div className="addButton shadowed clickScaleBig" onMouseUp={() => changeIfAddingGroup(true)}>
                <img className="addIcon" src="./images/addBlue.png"></img>
            </div>
            {isAddingGroup && (
                <div>
                    <GenericScreen
                        title={"New Group"}
                        element={<GroupScreen getGroup={() => undefined} closeScreen={() => changeIfAddingGroup(false)}></GroupScreen>}
                    ></GenericScreen>
                </div>
            )}
            {isEditingGroup && (
                <div>
                    <GenericScreen
                        title={"Edit Group"}
                        element={<GroupScreen getGroup={getSelectedGroup} closeScreen={() => changeIfEditingGroup(undefined)}></GroupScreen>}
                    ></GenericScreen>
                </div>
            )}
        </div>
    );
};

export interface GroupProp {
    group: Group;
    onEdit: () => void;
}
