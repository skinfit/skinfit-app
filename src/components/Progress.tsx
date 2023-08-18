import { ProgressProps } from "../types/props";

export const Progress = ({
        text = "",
        value = 0,
        size = "medium",
    }: ProgressProps) => {

    if (value < 0) {
        value = 0;
    } else if (value > 100) {
        value = 100;
    }

    return (
        <div className="flex flex-col space-y-1">
            {text && <p className={`text-gray-500 pb-2 text-center ${
                size === "small" ? "text-xs" : size === "medium" ? "text-sm" : "text-lg"
            } font-bold`}>{text}</p>}
            <div>
                <div className={`${
                    size === "small" ? "h-2" : size === "medium" ? "h-3" : "h-4"
                } bg-gray-300 rounded-full`}>
                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${value}%` }}></div>
                </div>
            </div>
        </div>
        
    );
}

export default Progress;