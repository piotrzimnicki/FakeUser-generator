import React from "react";
import {FakeUserSingleInfo} from "./FakeUserSingleInfo";

export const FakeUserSingle = ({userData}) => {
    return (
        <div className="inner-wrapper">
            <div className="img">
                <img src={userData.picture.large} alt=""/>
            </div>
            <div className="info">
                <FakeUserSingleInfo userData={`${userData.name.first} ${userData.name.last}`} description="name"/>
                <FakeUserSingleInfo userData={`${userData.gender}`} description="gender"/>
                <FakeUserSingleInfo userData={`${userData.email}`} description="email"/>

            </div>
            <div className="info">
                <FakeUserSingleInfo userData={`${userData.location.country}`} description="country"/>
                <FakeUserSingleInfo userData={`${userData.location.city}`} description="city"/>
                <FakeUserSingleInfo
                    userData={`${userData.location.street.name} ${userData.location.street.number}`}
                    description="address"
                />
            </div>

        </div>
    )
}