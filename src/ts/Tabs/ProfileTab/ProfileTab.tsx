import React from "react";
import "./ProfileTabStyles.less";

export const ProfileTab: React.FC<{}> = () => {
    return (
        <div className="ProfileTab fade-in">
            <h1 className="major-text center-text">Profile</h1>
            <div className="infoContainer">
                <div className="labels">
                    <p>Name:</p>
                    <p>Alias:</p>
                    <p>Phone:</p>
                </div>
                <div className="details">
                    <p>Nate Roylance</p>
                    <p>@n8rz</p>
                    <p>509-717-8321</p>
                </div>
            </div>
        </div>
    );
};
