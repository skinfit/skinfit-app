import React from "react";

type ButtonProps = {
    text: string;
    type?: "filled" | "outlined" | "disable" ;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
};

const buttonClasses: Record<string, string> = {
    filled: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full border-2 border-red-500 hover:border-red-700",
    outlined: "bg-white hover:bg-red-100 text-red-500 hover:text-500 font-bold py-2 px-4 border-2 border-red-500 hover:border-red-500 rounded-full",
    disable: "bg-gray-300 text-white font-bold py-2 px-4 rounded-full border-2 border-gray-300",
};

export const Button: React.FC<ButtonProps> = ({ 
        text, 
        type = "filled", 
        size = "medium", 
        onClick = () => {},
    }) => {

    return (
        <button 
            className={
                `${buttonClasses[type]} ${
                    size === "small" ? "text-xs" : size === "medium" ? "text-sm" : "text-lg"
                }`
            } 
            onClick={onClick}
        >
        {text}
        </button>
    );
};