import React from "react";
import './GenerateButton.css'

export const GenerateButton = ({setGenerate}) => {
    return <button onClick={() => setGenerate(true)} className="generate-btn">Generate user</button>
}