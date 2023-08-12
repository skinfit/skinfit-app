import React from "react";

type OptionProps = {
    text?: string;
    selected: boolean;
    onClick: () => void;
};

const optionClasses: Record<string, string> = {
    default: "w-full bg-white hover:bg-red-100 text-red-500 hover:text-500 font-bold py-2 px-4 border-2 border-red-500 hover:border-red-500 rounded",
    selected: "w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded border-2 border-red-500 hover:border-red-600",
};

export const Option: React.FC<OptionProps> = ({
    text = "",
    selected,
    onClick,
}) => {
    return (
        <button
            className={`${optionClasses[selected ? "selected" : "default"]} text-sm`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
