import { OptionProps } from "../types/props";

const optionClasses: Record<string, Record<string, string>> = {
    fill: {
        default: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full border-2 border-red-500 hover:border-red-700 rounded",
        disable: "bg-gray-300 text-white font-bold py-2 px-4 rounded-full border-2 border-gray-300 rounded",
    },
    outline: {
        default: "bg-transparent hover:bg-red-100 text-red-500 font-bold py-2 px-4 border-2 border-red-500 rounded",
        disable: "bg-transparent text-gray-300 font-bold py-2 px-4 border-2 border-gray-300 rounded",
    }
};

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