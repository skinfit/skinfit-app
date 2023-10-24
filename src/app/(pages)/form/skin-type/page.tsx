"use client"

import { Button } from "@/components/Button";
import { Progress } from "@/components/Progress";
import { Option } from "@/components/Select";
import AnswersList from "@/features/form/components/AnswersList";
import { setAnswer } from "@/features/form/stores/formSlice";
import { IFormSkinType, IFormState } from "@/features/form/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FormSkinType({
    prevPage = "sex",
    nextPage = "symptom",
    title = "肌について",
    progress = 30,
}: IFormSkinType) {

    const router = useRouter();

    const dispatch = useDispatch();
    const { skinTypes } = useSelector((state: {form: IFormState}) => state.form.answers);
    const { answers } = useSelector((state: {form: IFormState}) => state.form);

    const [ inputValues, setInputValues ] = useState<string[]>(skinTypes === undefined ? [] : skinTypes);
    
    const handleValueChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        const newInputValues = inputValues.includes(value) ? inputValues.filter((v) => v !== value) : [...inputValues, value];
        setInputValues(newInputValues);
    };

    const handlePrev = () => {
        if (prevPage !== null) {
            router.push(`/form/${prevPage}`);
        }  
    }

    const handleNext = () => {
        if (inputValues.length > 0 && nextPage !== null) {
            dispatch(setAnswer({ key: "skinTypes", value: inputValues }));
            router.push(`/form/${nextPage}`);
        }
    };

    const options = [
        {value: "乾燥肌", label: "乾燥肌"},
        {value: "普通肌", label: "普通肌"},
        {value: "脂性肌", label: "脂性肌"},
        {value: "混合肌", label: "混合肌"},
        {value: "敏感肌", label: "敏感肌"},
    ];
    
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
                        inputValues.length === 0 || nextPage === null
                    } onClick={handleNext} />
                </div>
                <Progress text={title} value={progress} size="medium" />
                <h1 className="text-center font-bold">肌質を教えてください（複数選択可）</h1>
                <div className="flex grid grid-flow-col space-x-2 justify-stretch">
                    {
                        options.map((option) => (
                            <Option key={option.value} value={option.value} label={option.label} selected={
                                inputValues.includes(option.value)
                            } onClick={handleValueChange} />
                        ))
                    }
                </div>
                <AnswersList answers={answers} />
            </div>
        </main>         
    );
};