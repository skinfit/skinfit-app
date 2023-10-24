import { MultiSelectProps, OptionProps, SingleSelectProps } from '@/types/props';
import { useState } from 'react';

export const Option = ({ 
        value,
        label = "",
        selected = false,
        onClick,
    }: OptionProps) => {

    const optionClass = selected ? "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border-2 border-red-500 hover:border-red-700 rounded" : "bg-transparent hover:bg-red-100 text-red-500 font-bold py-2 px-4 border-2 border-red-500 rounded";

    label = label === "" ? value : label;

    return (
        <button type="button" className={optionClass} value={value} onClick={onClick}>
        {label}
        </button>
    );
};

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
