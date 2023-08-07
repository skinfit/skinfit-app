import React from "react";

type SelectProps = {
    text?: string;
    selected: boolean;
    onClick: () => void;
};

const selectClasses: Record<string, string> = {
    default: "w-full bg-white hover:bg-red-100 text-red-500 hover:text-500 font-bold py-2 px-4 border-2 border-red-500 hover:border-red-500 rounded",
    selected: "w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
};

export const Select: React.FC<SelectProps> = ({
    text = "",
    selected,
    onClick,
}) => {
    return (
        <button
            className={`${selectClasses[selected ? "selected" : "default"]} text-sm`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
