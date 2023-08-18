"use client"

import { useState } from 'react';
import { SingleSelectProps } from '../types/props';
import { Option } from './Option';

export const SingleSelect = ({
        options = [],
        value = "",
        orientation = "vertical",
}: SingleSelectProps) => {

    const [_value, setValue] = useState(value);

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newValue = e.currentTarget.value;
        setValue(newValue);
    };

    return (
        <div className={`flex ${
            orientation === "vertical" ? "flex-col space-y-2" : "grid grid-flow-col space-x-2 justify-stretch"
        }`}>
            {options.map((option, index) => (
                <Option key={index} value={option.value} label={option.label} selected={option.value === _value} 
                onClick={onClick} />
            ))}
        </div>
    );
}

export default SingleSelect;
