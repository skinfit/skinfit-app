import { useState } from 'react';
import { MultiSelectProps } from '../types/props';
import { Option } from './Option';

export const MultiSelect = ({
        options = [],
        value = [],
        orientation = "vertical",
}: MultiSelectProps) => {

    const [_value, setValue] = useState(value);

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newValue = e.currentTarget.value;
        if (_value.includes(newValue)) {
            setValue(prev => prev.filter(v => v !== newValue));
        } else {
            setValue(prev => [...prev, newValue]);
        }
    };


    return (
        <div className={`flex ${
            orientation === "vertical" ? "flex-col space-y-2" : "grid grid-flow-col space-x-2 justify-stretch"
        }`}>
            {options.map((option, index) => (
                <Option key={index} value={option.value} label={option.label} selected={_value.includes(option.value)} onClick={onClick} />
            ))}
        </div>
    );
}

export default MultiSelect;
