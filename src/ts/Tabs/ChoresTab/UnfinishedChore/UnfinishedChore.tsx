import React from "react";
import "./UnfinishedChoreStyles.less";

export const UnfinishedChore: React.FC<{}> = () => {
    return (
        <div className="UnfinishedChore shadowed">
            <div className="checkCircle"></div>
            <div className="textDetails">
                <h2 className="choreTitle">Write talk</h2>
                <p className="choreTime">Before Sunday, 9:00am</p>
            </div>
        </div>
    );
};
