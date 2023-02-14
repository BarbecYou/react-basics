import React, { useRef, useState } from 'react'

export default function FormOnlyCapital(){
    const [name, setName] = useState<string>('');
    const MAX_LENGTH = 150;
    const freeTextRef = useRef<HTMLInputElement>(null);
    
    const length = name.length;

    function handleOnChange(event: React.SyntheticEvent<HTMLTextAreaElement | HTMLInputElement>){
            const filtered = Array.from(event.currentTarget.value).filter(x => x.toUpperCase() === x)
            const filteredString = filtered.join('').substring(0, MAX_LENGTH);
            setName(filteredString);
    }

    return (
        <div>
            <form action="POST">
                <textarea onChange={handleOnChange} value={name}></textarea>
                <input type="submit" value='Submit' />
                <p>Hátralévő karakterek száma: {MAX_LENGTH - length}</p>
            </form>
        </div>
    )
}