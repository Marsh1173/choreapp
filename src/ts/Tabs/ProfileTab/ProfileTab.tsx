import React from "react";
import "./ProfileTabStyles.less";

export const ProfileTab: React.FC<{}> = () => {
    return (
        <div className="ProfileTab fade-in">
            <img src="./images/profileBlack.png"></img>
            <div className="infoContainer">
                <div className="labels">
                    <p>Name:</p>
                    <p>Alias:</p>
                    <p>Phone:</p>
                </div>
                <div className="details">
                    <p>Nate Roylance</p>
                    <p>@n8rz</p>
                    <p>123-456-7890</p>
                </div>
            </div>
            <button className="changeAccountBtn">Change Account</button>
        </div>
    );
};
