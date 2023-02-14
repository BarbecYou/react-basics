import React, { useState} from 'react';

function useUserData(){
    const [ age, setAge] = useState(0);
    const [name, setName] = useState('');

    return {
        age,
        setAge,
        name,
        setName
    };
}

const Counter = () => {
    const {age, name, setAge, setName} = useUserData();

    return (
        <>
            <div>
                <div>
                    Érték: {age}
                </div>
                <div>
                    Duplája: {age*2}
                </div>
                <div>
                    Négyzete: {age ** 2}
                </div>
            </div>
            <button onClick={() => {
                setAge(age+1)
            }}>
                +1
            </button>
        </>
    )

}
export default Counter;