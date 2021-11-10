import React, { Component } from "react";
import { TabName } from "../main";
import "./MainViewTabStyles.less";

export class MainViewTab extends React.Component<MainViewTabProps, {}> {
    private selected: boolean = false;

    constructor(props: MainViewTabProps) {
        super(props);
    }

    render() {
        return (
            <div className={`MainViewTab ${this.selected == true ? "selected" : ""}`} onClick={() => this.props.onClickMethod(this.props.tabName)}>
                <img className="mainViewTabIcon" src={"./images/" + this.props.imgName}></img>
                <p>{this.props.tabName.name}</p>
            </div>
        );
    }

    public setSelected() {
        this.selected = true;
        this.forceUpdate();
    }

    public clearSelected() {
        this.selected = false;
        this.forceUpdate();
    }
}

export interface MainViewTabProps {
    tabName: TabName;
    onClickMethod: (tabName: TabName) => void;
    imgName: string;
}
