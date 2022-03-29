import React from "react";

export const FakeUserSingleInfo = ({userData,description}) => {
    return <label>
        <p className="label-text">{description}</p>
        <p>{userData}</p>
    </label>
}