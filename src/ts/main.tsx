import React, { Component, createElement, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MainViewTab } from "./MainViewTab/MainViewTab";
import "./MainStyles.less";
import { TasksTab } from "./Tabs/TasksTab/TasksTab";
import { GroupsTab } from "./Tabs/GroupsTab/GroupsTab";
import { ProfileTab } from "./Tabs/ProfileTab/ProfileTab";

let nextId: number = 0;
export function getNextKey(): number {
    return nextId++;
}

export interface TabName {
    name: "Tasks" | "Groups" | "Profile";
}

export const MainDiv: React.FC<{}> = () => {
    let startTab: TabName = { name: "Tasks" };

    const [currentTab, changeTabView] = useState(startTab);

    let tasksRef: React.RefObject<MainViewTab> = React.createRef();
    let groupsRef: React.RefObject<MainViewTab> = React.createRef();
    let profileRef: React.RefObject<MainViewTab> = React.createRef();

    const changeTab = (tabName: TabName) => {
        tasksRef.current?.clearSelected();
        groupsRef.current?.clearSelected();
        profileRef.current?.clearSelected();

        switch (tabName.name) {
            case "Tasks":
                tasksRef.current?.setSelected();
                break;
            case "Groups":
                groupsRef.current?.setSelected();
                break;
            case "Profile":
                profileRef.current?.setSelected();
                break;
        }

        changeTabView(tabName);
    };

    useEffect(() => {
        changeTab(startTab);
    }, []);

    return (
        <div className="Main fade-in">
            <div className="tabBar">
                <MainViewTab ref={profileRef} tabName={{ name: "Profile" }} imgName="profile.png" onClickMethod={changeTab}></MainViewTab>
                <MainViewTab ref={tasksRef} tabName={{ name: "Tasks" }} imgName="checkIcon.png" onClickMethod={changeTab}></MainViewTab>
                <MainViewTab ref={groupsRef} tabName={{ name: "Groups" }} imgName="groups.png" onClickMethod={changeTab}></MainViewTab>
                {/* <MainViewTab ref={settingsRef} tabName={{ name: "Settings" }} imgName="settings.png" onClickMethod={changeTab}></MainViewTab> */}
            </div>
            <div className="scrollContainer">
                {/* <TestScroller></TestScroller> */}
                {currentTab.name == "Tasks" && <TasksTab></TasksTab>}
                {currentTab.name == "Groups" && <GroupsTab></GroupsTab>}
                {currentTab.name == "Profile" && <ProfileTab></ProfileTab>}
            </div>
        </div>
    );
};

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(MainDiv), domContainer);

export function putLeadingZeros(num: number): string {
    let str: string = num.toString();
    while (str.length < 2) str = "0" + str;
    return str;
}

export function putLeadingZerosOnStr(str: string): string {
    while (str.length < 2) str = "0" + str;
    return str;
}
