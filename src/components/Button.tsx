import { ButtonProps } from "../types/props";

const buttonClasses: Record<string, Record<string, string>> = {
    fill: {
        default: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full border-2 border-red-500 hover:border-red-700 rounded-full",
        disable: "bg-gray-300 text-white font-bold py-2 px-4 rounded-full border-2 border-gray-300 rounded-full",
    },
    outline: {
        default: "bg-transparent hover:bg-red-100 text-red-500 font-bold py-2 px-4 border-2 border-red-500 rounded-full",
        disable: "bg-transparent text-gray-300 font-bold py-2 px-4 border-2 border-gray-300 rounded-full",
    }
};

export const Button = ({ 
        value,
        variant = "fill",
        size = "medium",
        disabled = false,
        ...props
    }: ButtonProps) => {

    return (
        <button type="button"
            className={
                `${buttonClasses[variant][disabled ? "disable" : "default"]} ${
                    size === "small" ? "text-xs" : size === "medium" ? "text-sm" : "text-lg"
                }`
            } 
            disabled={disabled}
            {...props}
        >
        {value}
        </button>
    );
};

export default Button;