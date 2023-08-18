import { useEffect, useState } from 'react';
import { TextInputProps } from '../types/props';

export const TextInput = ({
        value = "",
        placeholder = "",
        size = "medium",
        align = "left",
        onChange = () => {},
    }: TextInputProps) => {

    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onChange(e);
    };

    return (
        <div className='space-y-2 flex flex-col'>
            <input type="text" inputMode="text"
                className={
                    `${
                        // Text size
                        size === "small" ? "text-300" : size === "medium" ? "text-500" : "text-700"
                    } ${
                        // Text alignment
                        align === "left" ? "text-left" : "text-right"
                    } font-bold border-2 border-red-500 rounded px-4 py-2 focus:outline-none focus:border-red-700`}
                placeholder={placeholder}
                value={inputValue}
                onChange={_onChange}
            />
        </div>
    );
}


