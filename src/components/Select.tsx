import React, { useState } from "react";
import { Option } from "./Option";

type SelectProps = {
    options: string[];
    type?: "radio" | "multi";
    orientation?: "horizontal" | "vertical";
};

const selectClasses: Record<string, string> = {
    horizontal: "flex w-full justify-between  space-x-2", 
    vertical: "flex w-full flex-col space-y-2",
};

type RadioSelectProps = SelectProps & {
    type: "radio";
    value: string;
};

const RadioSelect: React.FC<RadioSelectProps> = ({ 
        options,
        value,
        orientation = "horizontal",
    }) => {
    const [selected, setSelected] = useState(value);

    const onChange= (option: string) => {
        setSelected(option);
    };

    return (
        <div className={selectClasses[orientation]}>
            {options.map((option) => (
                <Option
                    key={option}
                    text={option}
                    selected={option === selected}
                    onClick={() => onChange(option)}
                />
            ))}
        </div>
    );
}

type MultiSelectProps = SelectProps & {
    type: "multi";
    value: string[];
};

const MultiSelect: React.FC<MultiSelectProps> = ({
        options,
        value,
        orientation = "horizontal",
    }) => {
        const [selected, setSelected] = useState(value);

        const onChange = (option: string) => {
            if (selected.includes(option)) {
                setSelected(selected.filter((item) => item !== option));
            } else {
                setSelected([...selected, option]);
            }
        };

        return (
            <div className={selectClasses[orientation]}>
                {options.map((option) => (
                    <Option
                        key={option}
                        text={option}
                        selected={selected.includes(option)}
                        onClick={() => onChange(option)}
                    />
                ))}
            </div>
        );
}

export const Select: React.FC<SelectProps> = ({
    options,
    type = "radio",
    orientation = "horizontal",
}) => {
    
    if (type === "radio") {
        return <RadioSelect type={type} options={options} orientation={orientation} value={options[0]} />;
    } else {
        return <MultiSelect type={type} options={options} orientation={orientation} value={[]} />;
    }
    
}
