import React, { useEffect, useState } from "react";
import { GroupHandler } from "../../../Model/GroupHandler";
import { TextInput } from "../../GenericComponents/TextInput/TextInput";
import { GenericScreenButtons } from "../GenericScreen/GenericScreen";
import { getNextId } from "../../../Model/Id";
import "./GroupScreenStyles.less";
import { Group } from "../../../Model/Group";
import { GroupMemberComponent } from "./GroupMemberComponent/GroupMemberComponent";
import { getNextKey } from "../../main";

var groupMemberNames: string[] = [];

export const GroupScreen: React.FC<AddGroupProps> = (props) => {
    useEffect(() => {
        groupMemberNames = [];
        if (group) {
            group.members.forEach((name) => {
                groupMemberNames.push(name);
            });
        }
        setValue((value) => value + 1);
    }, []);

    let nameInputRef: React.RefObject<TextInput> = React.createRef();
    let colorInputRef: React.RefObject<HTMLInputElement> = React.createRef();
    let group: Group | undefined = props.getGroup();

    let onFinish = (finalGroup: Group | undefined) => {
        let willClose: boolean = true;
        let willAdd: boolean = false;

        if (!finalGroup) {
            finalGroup = { name: "", id: getNextId(), members: [], color: "#000000", visible: true };
            willAdd = true;
        }

        //name
        if (nameInputRef.current) {
            let value: string = nameInputRef.current.getValue();
            if (value == "") {
                alert("Input a name!");
                willClose = false;
            } else {
                finalGroup.name = value;
            }
        }
        //group members
        let newMemberList: string[] = groupMemberNames.filter((name) => name != "");
        finalGroup.members = newMemberList;
        //color
        let color: string = colorInputRef.current!.value;
        finalGroup.color = color;

        if (willClose) {
            if (willAdd) GroupHandler.groupList.push(finalGroup);
            props.closeScreen();
            GroupHandler.groupListChange();
        }
    };

    let groupMemberNameElements: JSX.Element[] = [];
    for (let i: number = 0; i < groupMemberNames.length; i++) {
        groupMemberNameElements.push(
            <GroupMemberComponent
                name={groupMemberNames[i]}
                onDelete={() => {
                    groupMemberNames.splice(i, 1);
                    changeMemberNames();
                }}
                key={getNextKey()}
                onChange={(newVal: string) => {
                    groupMemberNames[i] = newVal;
                }}
            ></GroupMemberComponent>,
        );
    }
    const [value, setValue] = useState(0);
    const changeMemberNames = () => {
        setValue((value) => value + 1);
    };

    return (
        <div className="GroupScreen">
            <div className="dataDiv">
                <div className="nameInputDiv">
                    <p className="title">Name:</p>
                    <TextInput ref={nameInputRef} defaultValue={group ? group.name : ""}></TextInput>
                </div>
                <hr></hr>
                <div className="memberDiv">
                    <p className="title ownName">@n8rz</p>
                    {groupMemberNameElements}
                    <button
                        className="newMemberButton clickScaleBig"
                        onMouseUp={() => {
                            groupMemberNames.push("");
                            changeMemberNames();
                        }}
                    >
                        + Member
                    </button>
                </div>

                <hr></hr>
                <div className="colorInputDiv">
                    <p className="title">Color:</p>
                    <input ref={colorInputRef} type="color" defaultValue={group ? group.color : "#000000"}></input>
                </div>
            </div>
            <GenericScreenButtons
                mainTitle={group ? "Save" : "Create"}
                secondaryTitle={"Cancel"}
                mainOnClick={() => {
                    onFinish(group);
                }}
                secondaryOnClick={props.closeScreen}
                deleteOnClick={
                    group
                        ? () => {
                              GroupHandler.deleteGroup(group!.id);
                              props.closeScreen();
                              GroupHandler.groupListChange();
                          }
                        : undefined
                }
                copyOnClick={
                    group
                        ? () => {
                              let copyGroup = Object.assign({}, group);
                              copyGroup.id = getNextId();
                              GroupHandler.groupList.push(copyGroup);
                              props.closeScreen();
                              GroupHandler.groupListChange();
                          }
                        : undefined
                }
            ></GenericScreenButtons>
        </div>
    );
};

export interface AddGroupProps {
    closeScreen: () => void;
    getGroup: () => Group | undefined;
}
