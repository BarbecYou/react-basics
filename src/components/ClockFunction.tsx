import React, { useEffect, useState } from 'react'

interface ClockState {
    time: Date;
}

export default function ClockFunction(){
    const[time, setTime] = useState(new Date())

    useEffect(() => {
        document.body.style.backgroundColor='red';

        return () => {
            document.body.style.backgroundColor='green';
        }
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {setTime(new Date())}, 1000)

        return () => {
            clearInterval(timer);
        }
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor='red';

        return () => {
            document.body.style.backgroundColor='green';
        }
    }, []);

    return (
        <div>
            {time.toLocaleString()}
        </div>
    )
}