import React from "react";
import { Component } from "react";
import { TextInput } from "../../../GenericComponents/TextInput/TextInput";
import "./GroupMemberComponentStyles.less";

export class GroupMemberComponent extends Component<GroupMemberProp, GroupMemberState> {
    private nameInputRef: React.RefObject<TextInput> = React.createRef();

    constructor(props: GroupMemberProp) {
        super(props);
        this.state = {
            name: this.props.name,
        };
    }

    render() {
        return (
            <div className="GroupMemberComponent">
                <div className="nameInputDiv">
                    <p className="title">@:</p>
                    <TextInput ref={this.nameInputRef} defaultValue={this.state.name} onChange={this.props.onChange}></TextInput>
                    <div className="deleteButton clickScaleBig" onMouseUp={this.props.onDelete}>
                        X
                    </div>
                </div>
            </div>
        );
    }

    public getValue(): string {
        return this.nameInputRef.current!.getValue();
    }
}

export interface GroupMemberProp {
    name: string;
    onDelete: () => void;
    onChange: (newVal: string) => void;
}
export interface GroupMemberState {
    name: string;
}
