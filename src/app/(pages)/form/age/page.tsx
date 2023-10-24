"use client"

import Button from "@/components/Button";
import { Progress } from "@/components/Progress";
import AnswersList from "@/features/form/components/AnswersList";
import { setAnswer } from "@/features/form/stores/formSlice";
import { IFormAge, IFormState } from "@/features/form/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FormAge({
    prevPage = null,
    nextPage = "sex",
    title = "基本情報",
    progress = 10,
    min = 0,
    max = 100,
}: IFormAge ) {

    const router = useRouter();

    const dispatch = useDispatch();
    const { age } = useSelector((state: {form: IFormState}) => state.form.answers);
    const { answers } = useSelector((state: {form: IFormState}) => state.form);
    
    const [ inputValue, setInputValue ] = useState<string>(age === undefined ? "" : age.toString());
    const [ checkedValue, setCheckedValue ] = useState<number | null>(age === undefined ? null : age);
    const [error, setError] = useState<string | null>(null);

    const checkValue = (value: string) => {
        
        const regex = /^[0-9]+$/;
        if (value === "") {
            setError(null);
            setCheckedValue(null);
        } 
        else if (!regex.test(value)) {
            setError(`${min}から${max}までの半角数字で入力してください`);
            setCheckedValue(null);
        }
        else {
            const num = parseInt(value);
            if (min !== null && num < min) {
                setError("数値が小さすぎます");
                setCheckedValue(null);
            } else if (max !== null && num > max) {
                setError("数値が大きすぎます");
                setCheckedValue(null);
            } else {
                setError(null);
                setCheckedValue(num);
            }
        }
    }

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        checkValue(value);
    };

    const handlePrev = () => {
        if (prevPage !== null) {
            router.push(`/form/${prevPage}`);
        }
    }

    const handleNext = () => {
        if (checkedValue !== null) {
            dispatch(setAnswer({ key: "age", value: checkedValue }));
            router.push(`/form/${nextPage}`);
        }
    }
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-start py-24 bg-white">
            <div className="flex flex-col items-left space-y-4 max-w-2xl w-full space-y-12">
                <div className="items-left w-full">
                    <Link href="/" className="text-gray-500 text-sm cursor-pointer">{'<'} トップページへ戻る</Link>
                </div>
                <div className="flex flex-row justify-between w-full">
                    <Button key="back" value="戻る" variant="outline" size="medium" disabled={
                        prevPage === null
                    } onClick={handlePrev} />
                    <Button key="next" value="次へ" variant="fill" size="medium" disabled={
                        checkedValue === null || nextPage === null
                    } onClick={handleNext} />
                </div> 
                <Progress text={title} value={progress} size="medium" />
                <h1 className="text-center font-bold">年齢を教えてください</h1>
                <input 
                type="text" 
                inputMode="text" 
                className="text-500 text-right font-bold border-2 border-red-500 rounded px-4 py-2 focus:outline-none focus:border-red-700"
                placeholder={`${min}から${max}までの半角数字で入力してください`}
                value={inputValue}
                onChange={handleValueChange}
                />
                {
                    error && <p className="text-red-500 text-xs font-bold text-right">{error}</p>
                }  
                <AnswersList answers={answers} />
            </div>
        </main>         
    );
};