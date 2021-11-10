import React from "react";
import "./ChoresTabStyles.less";
import { UnfinishedChore } from "./UnfinishedChore/UnfinishedChore";

export const ChoresTab: React.FC<{}> = () => {
    return (
        <div className="ChoresTab">
            <div className="choreContainer fade-in">
                <div className="chores">
                    <h1>Chores</h1>
                    <UnfinishedChore></UnfinishedChore>
                    <UnfinishedChore></UnfinishedChore>
                    <UnfinishedChore></UnfinishedChore>
                </div>
                <div className="finished">
                    <h1>Finished</h1>
                    <UnfinishedChore></UnfinishedChore>
                    <UnfinishedChore></UnfinishedChore>
                    <UnfinishedChore></UnfinishedChore>
                </div>
                <div className="coming-up">
                    <h1>Coming Up</h1>
                    <UnfinishedChore></UnfinishedChore>
                    <UnfinishedChore></UnfinishedChore>
                    <UnfinishedChore></UnfinishedChore>
                </div>
            </div>
            <div className="addButton shadowed fade-in">
                <img className="addIcon" src="./images/add.png"></img>
            </div>
        </div>
    );
};
