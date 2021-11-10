import React, { Component, createElement, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MainViewTab } from "./MainViewTab/MainViewTab";
import "./MainStyles.less";
import { ChoresTab } from "./Tabs/ChoresTab/ChoresTab";
import { GroupsTab } from "./Tabs/GroupsTab/GroupsTab";
import { ProfileTab } from "./Tabs/ProfileTab/ProfileTab";
import { SettingsTab } from "./Tabs/SettingsTab/SettingsTab";

export interface TabName {
    name: "chores" | "groups" | "profile" | "settings";
}

export const MainDiv: React.FC<{}> = () => {
    let startTab: TabName = { name: "chores" };

    const [currentTab, changeTabView] = useState(startTab);

    let choresRef: React.RefObject<MainViewTab> = React.createRef();
    let groupsRef: React.RefObject<MainViewTab> = React.createRef();
    let profileRef: React.RefObject<MainViewTab> = React.createRef();
    let settingsRef: React.RefObject<MainViewTab> = React.createRef();

    const changeTab = (tabName: TabName) => {
        choresRef.current!.clearSelected();
        groupsRef.current!.clearSelected();
        profileRef.current!.clearSelected();
        settingsRef.current!.clearSelected();

        switch (tabName.name) {
            case "chores":
                choresRef.current!.setSelected();
                break;
            case "groups":
                groupsRef.current!.setSelected();
                break;
            case "profile":
                profileRef.current!.setSelected();
                break;
            case "settings":
                settingsRef.current!.setSelected();
                break;
        }

        changeTabView(tabName);
    };

    useEffect(() => {
        changeTab(startTab);
    }, []);

    return (
        <div className="Main">
            <div className="scrollContainer">
                {/* <TestScroller></TestScroller> */}
                {currentTab.name == "chores" && <ChoresTab></ChoresTab>}
                {currentTab.name == "groups" && <GroupsTab></GroupsTab>}
                {currentTab.name == "profile" && <ProfileTab></ProfileTab>}
                {currentTab.name == "settings" && <SettingsTab></SettingsTab>}
            </div>
            <div className="tabBar">
                <MainViewTab ref={choresRef} tabName={{ name: "chores" }} imgName="chores.png" onClickMethod={changeTab}></MainViewTab>
                <MainViewTab ref={groupsRef} tabName={{ name: "groups" }} imgName="groups.png" onClickMethod={changeTab}></MainViewTab>
                <MainViewTab ref={profileRef} tabName={{ name: "profile" }} imgName="profile.png" onClickMethod={changeTab}></MainViewTab>
                <MainViewTab ref={settingsRef} tabName={{ name: "settings" }} imgName="settings.png" onClickMethod={changeTab}></MainViewTab>
            </div>
        </div>
    );
};

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(MainDiv), domContainer);
