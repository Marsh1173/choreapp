import React from "react";
import "./SettingsTabStyles.less";

export const SettingsTab: React.FC<{}> = () => {
    return (
        <div className="SettingsTab fade-in">
            <h1>Settings</h1>
            <div className="infoContainer">
                <div className="labels">
                    <p>Setting1:</p>
                    <p>Setting2:</p>
                    <p>Setting3:</p>
                </div>
                <div className="details">
                    <p>Value1</p>
                    <p>Value2</p>
                    <p>Value3</p>
                </div>
            </div>
        </div>
    );
};
