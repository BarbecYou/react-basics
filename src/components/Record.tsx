import React, { useState } from "react";

interface MyRecord {
    id: number;
    name: string;
}

let nextId = 0;

const TEST_RECORDS: MyRecord[] = [{
    id: nextId++,
    name: 'Egy'
}, {
    id: nextId++,
    name: 'Kettő'
}];

const Records = () => {
    const [records, setRecords] = useState(TEST_RECORDS);

    function clickHandler() {
        const newRecord: MyRecord = {
            id: nextId++,
            name: "sokadik"
        }
        const modified: MyRecord[] = [
            ...records,
            newRecord
        ]
        setRecords(modified)
    }

    function removeClickHandler() {
        if (nextId >= 1) {
            setRecords(records.filter(x => x.id !== records.length - 1));
            nextId--;
        }
    }

    return (
        <>
            <button onClick={clickHandler}>+1</button>
            <button onClick={removeClickHandler}>-1</button>
            <ul>
                {records.map(record => (

                    <li key={record.id}>{record.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Records;