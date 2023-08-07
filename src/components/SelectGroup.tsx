import React from "react";
import { Select } from "./Select";

type SelectGroupProps = {
    options: string[];
    orientation?: "horizontal" | "vertical";
    value: string;
    onChange: (value: string) => void;
};

const selectClasses: Record<string, string> = {
    horizontal: "flex justify-between w-full space-x-2", 
    vertical: "flex w-full flex-col space-y-2",
};

export const SelectGroup: React.FC<SelectGroupProps> = ({
    options,
    orientation = "horizontal",
    value,
    onChange,
}) => {
    return (
        <div className={selectClasses[orientation]}>
            {options.map((option) => (
                <Select
                    key={option}
                    text={option}
                    selected={option === value}
                    onClick={() => onChange(option)}
                />
            ))}
        </div>
    );
}
