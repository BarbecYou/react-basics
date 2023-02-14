import React, {useState} from 'react';

const Appender = () => {
    const [value, setValue] = useState('');

    return (
        <>
        <div>
            Érték: {value}
        </div>
        <button onClick={() => {
            setValue(value + 'sdfjsdfa')
        }}>
            Szó hozzáfűzése
        </button>
        </>
    )
}
export default Appender;