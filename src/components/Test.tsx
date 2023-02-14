import React, { useState } from 'react'
import '../styles/test.css'

interface TestProps{
    value: number;
    setValue: (value: number) => void;
}

export default function Test({value, setValue}: TestProps){

    return (
        <div className="TestContainer">
            <button className="testButton" onClick={() => {setValue(value + 1)}}>{value}</button>
        </div>
    )
}