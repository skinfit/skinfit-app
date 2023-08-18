"use client"

import { useEffect, useState } from 'react';
import { NumberInputProps } from '../types/props';

export const NumberInput = ({
        value = 0,
        min = 0,
        max = 100,
        placeholder = "",
        size = "medium",
        onChange = () => {},
    }: NumberInputProps) => {

    const [inputValue, setInputValue] = useState(0);
    const [error, setError] = useState("");

    const setInputValueWithValidation = (value: number) => {
        if (value < min) {
            setInputValue(min);
            setError(`数値が小さすぎます`);
        } else if (value > max) {
            setInputValue(max);
            setError(`数値が大きすぎます`);
        } else {
            setInputValue(value);
            setError("");
        }
    };

    useEffect(() => {
        setInputValueWithValidation(value);
    }, [value]);

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9]+$/;
        if (e.target.value === "") {
            setInputValueWithValidation(min);
        }
        else if (regex.test(e.target.value)) {
            setInputValueWithValidation(parseInt(e.target.value));
        }
        else {
            setError("半角数字で入力してください");
        }
        onChange(e);
    };

    return (
        <div className='space-y-2 flex flex-col'>
            <input type="text" size={3} inputMode="text"
                className={
                    `${
                        // Text size
                        size === "small" ? "text-300" : size === "medium" ? "text-500" : "text-700"
                    } text-right font-bold border-2 border-red-500 rounded px-4 py-2 focus:outline-none focus:border-red-700`}
                placeholder={placeholder}
                value={inputValue}
                onChange={_onChange}
            />
            <p className={`text-red-500 text-xs font-bold "text-right"`}>{error}</p>
        </div>
        
    );
}


