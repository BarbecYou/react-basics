import React, { useState } from 'react'
import DecreaseButton from './Decrease';
import Test from './Test'

export default function CounterButtons(){
    const [value, setValue] = useState(0);

    return (
        <div className='counterButtons'>
            {value < 0 ? 
            <div><DecreaseButton value={value} setValue={setValue}/><Test value={value} setValue={setValue}/></div> 
            :<div><Test value={value} setValue={setValue}/>
            <DecreaseButton value={value} setValue={setValue}/></div>}
            <h3>{value < 0 ? "A szám negatív" : ""}</h3>
        </div>
    )
}