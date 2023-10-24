"use client"

import { Button } from "@/components/Button";
import { Progress } from "@/components/Progress";
import { Option } from "@/components/Select";
import AnswersList from "@/features/form/components/AnswersList";
import { setAnswer } from "@/features/form/stores/formSlice";
import { IFormSleep, IFormState } from "@/features/form/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const FormSleep: React.FC<IFormSleep> = ({
    prevPage = "symptom",
    nextPage = "confirm",
    title = "生活習慣",
    progress = 50,
}) => {

    const router = useRouter();

    // Redux state
    const dispatch = useDispatch();
    const { bedTime, wakeUpTime } = useSelector((state: {form: IFormState}) => state.form.answers);
    const { answers } = useSelector((state: {form: IFormState}) => state.form);

    const  [ inputBedTime, setInputBedTime ] = useState<string | null>(bedTime === undefined ? null : bedTime);
    const  [ inputWakeUpTime, setInputWakeUpTime ] = useState<string | null>(wakeUpTime === undefined ? null : wakeUpTime);

    const handleBedTimeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        if (value === inputBedTime) {
            setInputBedTime(null);
        }
        else {
            setInputBedTime(value);
        }
    };

    const handleWakeUpTimeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        if (value === inputWakeUpTime) {
            setInputWakeUpTime(null);
        }
        else {
            setInputWakeUpTime(value);
        }
    };  

    const handlePrev = () => {
        if (prevPage !== null) {
            router.push(`/form/${prevPage}`);
        }  
    }

    const handleNext = () => {
        if (nextPage !== null && inputBedTime !== null && inputWakeUpTime !== null) {
            dispatch(setAnswer({key: "bedTime", value: inputBedTime}));
            dispatch(setAnswer({key: "wakeUpTime", value: inputWakeUpTime}));
            router.push(`/form/${nextPage}`);
        }  
    }

    const bedTimes = [
        {value: "21時前", label: "21時前"},
        {value: "21時から23時", label: "21時から23時"},
        {value: "23時から1時", label: "23時から1時"},
        {value: "1時以降", label: "1時以降"},
        {value: "不規則", label: "不規則"},
    ];

    const wakeUpTimes = [
        {value: "5時前", label: "5時前"},
        {value: "5時から7時", label: "5時から7時"},
        {value: "7時から9時", label: "7時から9時"},
        {value: "9時以降", label: "9時以降"},
        {value: "不規則", label: "不規則"},
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
                        inputBedTime === null || inputWakeUpTime === null
                    } onClick={handleNext} />
                </div>
                <Progress text={title} value={progress} size="medium" />
                <h1 className="text-center font-bold">就寝時間を教えてください</h1>
                <div className="flex grid grid-flow-col space-x-2 justify-stretch">
                    {
                        bedTimes.map((option) => (
                            <Option key={option.value} value={option.value} label={option.label} selected={option.value === inputBedTime} onClick={handleBedTimeChange} />
                        ))
                    }
                </div>
                <h1 className="text-center font-bold">起床時間を教えてください</h1>
                <div className="flex grid grid-flow-col space-x-2 justify-stretch">
                    {
                        wakeUpTimes.map((option) => (
                            <Option key={option.value} value={option.value} label={option.label} selected={option.value === inputWakeUpTime} onClick={handleWakeUpTimeChange} />
                        ))
                    }
                </div>
                <AnswersList answers={answers} />
            </div>
        </main>         
    );
};

export default FormSleep;
