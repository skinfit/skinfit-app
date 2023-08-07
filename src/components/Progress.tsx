import React from "react";

type ProgressProps = {
    progress: number;
    size?: 'small' | 'medium' | 'large';
    text?: string;
};

const progressClasses: Record<string, string> = {
    small: "h-2 w-full bg-gray-300 rounded-full",
    medium: "h-3 w-full bg-gray-300 rounded-full",
    large: "h-4 w-full bg-gray-300 rounded-full",
};

export const Progress: React.FC<ProgressProps> = ({
        progress,
        size = "medium",
        text = "",
    }) => {

    return (
        <>
        {text && <p className={`flex items-center justify-center text-gray-500 pb-2 ${
            size === "small" ? "text-xs" : size === "medium" ? "text-sm" : "text-lg"
        } font-semibold`}>{text}</p>}
        <div className="flex w-full items-center justify-center">
            <div className={`${progressClasses[size]} mr-2`}>
                <div className="h-full bg-red-500 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
        </>
        
    );
}

export default Progress;
