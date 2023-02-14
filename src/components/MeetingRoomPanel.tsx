import React, { useState } from 'react'

interface Props {
    id: number;
    name: string;
    is_occupied: boolean;
}

export default function MeetingRoomPanel({ id, name, is_occupied }: Props) {
    const [value, setValue] = useState<Props>();

    return (
        <div className="meetingRoomPanel">
            <h2>{name}</h2>
            <h2>{id}</h2>
            <h2>{is_occupied}</h2>
        </div>
    );
}