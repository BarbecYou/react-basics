import React from 'react'

interface DecreaseProps {
    value: number;
    setValue: (value: number) => void;
    decreaseAmount?: number;
}

export default function DecreaseButton({value, setValue, decreaseAmount = 1}: DecreaseProps) {
    return (
        <button onClick={() => {setValue(value - decreaseAmount)}}>{'- ' + decreaseAmount}</button>
    )
}