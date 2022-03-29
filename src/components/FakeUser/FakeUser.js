import React, {useEffect, useState} from "react";
import {FakeUserSingle} from "./FakeUserSingle";
import './FakeUser.css'
import {GenerateButton} from "../GenerateBtn/GenerateButton";
import {Loading} from "../Loading/Loading";
export const FakeUser = props => {
    const [userData, setUserData] = useState(null);
    const [generate, setGenerate] = useState(false);
    const [error,setError] = useState(false)
    useEffect(async () => {
        try {
            if (generate) {
                setUserData(null)
                const res = await fetch('https://randomuser.me/api');
                const data = await res.json();
                const user = data.results.pop();
                setUserData(user);
                setError(false);
            }
            setGenerate(false);
        } catch (e) {
            setError(true);
            console.log(e)
        }

    }, [generate])

    if(error) return <p>Error loading...</p>

    return <div className="wrapper">
        {generate &&  <Loading/>}
        {userData && <FakeUserSingle userData={userData}/>}
        <GenerateButton setGenerate={setGenerate} />

    </div>

}