import React, { PropsWithChildren, useState } from 'react'
import '../styles/accordion.css'

interface Props {
    title: string;
    desc: string;
    startingState: boolean;
    // false means drop down is not visible
}

export default function Accrodion({ title, desc, startingState = false, children }: PropsWithChildren<Props>) {
    const [activeIndex, setActiveIndex] = useState(startingState);

    function handleClick() {
        setActiveIndex(!activeIndex)
    }
    function setVisibility(activeIndex: boolean) {
        if (activeIndex) {
            document.getElementById("desc")!.style.display = "block";
        } else {
            document.getElementById("title")!.style.display = "none";
        }
    }

    return (
        <>
            {setVisibility(activeIndex)}
            <div className='accordion'>
                <div id="title" onClick={handleClick}>{title}</div>
                <div id="desc">{desc}</div>
            </div>
        </>
    );
}