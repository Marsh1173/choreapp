import React, { Component, createElement, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MainViewTab } from "./MainViewTab/MainViewTab";
import "./MainStyles.less";
import { ChoresTab } from "./Tabs/ChoresTab/ChoresTab";
import { GroupsTab } from "./Tabs/GroupsTab/GroupsTab";
import { ProfileTab } from "./Tabs/ProfileTab/ProfileTab";
import { SettingsTab } from "./Tabs/SettingsTab/SettingsTab";

export interface TabName {
    name: "Chores" | "Groups" | "Profile" | "Settings";
}

export const MainDiv: React.FC<{}> = () => {
    let startTab: TabName = { name: "Chores" };

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
            case "Chores":
                choresRef.current!.setSelected();
                break;
            case "Groups":
                groupsRef.current!.setSelected();
                break;
            case "Profile":
                profileRef.current!.setSelected();
                break;
            case "Settings":
                settingsRef.current!.setSelected();
                break;
        }

        changeTabView(tabName);
    };

    useEffect(() => {
        changeTab(startTab);
    }, []);

    return (
        <div className="Main fade-in">
            <div className="scrollContainer">
                {/* <TestScroller></TestScroller> */}
                {currentTab.name == "Chores" && <ChoresTab></ChoresTab>}
                {currentTab.name == "Groups" && <GroupsTab></GroupsTab>}
                {currentTab.name == "Profile" && <ProfileTab></ProfileTab>}
                {currentTab.name == "Settings" && <SettingsTab></SettingsTab>}
            </div>
            <div className="tabBar">
                <MainViewTab ref={choresRef} tabName={{ name: "Chores" }} imgName="chores.png" onClickMethod={changeTab}></MainViewTab>
                <MainViewTab ref={groupsRef} tabName={{ name: "Groups" }} imgName="groups.png" onClickMethod={changeTab}></MainViewTab>
                <MainViewTab ref={profileRef} tabName={{ name: "Profile" }} imgName="profile.png" onClickMethod={changeTab}></MainViewTab>
                <MainViewTab ref={settingsRef} tabName={{ name: "Settings" }} imgName="settings.png" onClickMethod={changeTab}></MainViewTab>
            </div>
        </div>
    );
};

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(MainDiv), domContainer);
