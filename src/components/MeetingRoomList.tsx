import React, { useEffect, useState } from 'react'
import MeetingRoomPanel from './MeetingRoomPanel';
import { useAsync } from 'react-async'

async function fetchData() {
    const response = await fetch('/meetingroom');
    const json = await response.json();
    return json as Promise<MeetingRoom[]>;
}

interface MeetingRoom {
    id: number;
    name: string;
    is_occupied: boolean;
}

export default function MeetingRoomList() {
    const { data, error, isLoading } = useAsync({ promiseFn: fetchData })
    // useEffect(() => {
    //     fetchData().then((data) => {
    //         setValue(data);
    //     });
    // });

    return (
        <>
            {data?.map((oneData: MeetingRoom) => (
                <MeetingRoomPanel id={oneData.id} name={oneData.name} is_occupied={oneData.is_occupied} />
            ))}
        </>
    )
}