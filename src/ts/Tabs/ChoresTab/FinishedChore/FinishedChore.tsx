import React from "react";
import "./FinishedChoreStyles.less";

export const FinishedChore: React.FC<{}> = () => {
    return (
        <div className="FinishedChore shadowed">
            <div className="checkCircle"></div>
            <h2 className="choreTitle">Write talk</h2>
        </div>
    );
};
