"use client"

import { Button } from "@/components/Button";
import { Progress } from "@/components/Progress";
import { Option } from "@/components/Select";
import AnswersList from "@/features/form/components/AnswersList";
import { setAnswer } from "@/features/form/stores/formSlice";
import { IFormSex, IFormState } from "@/features/form/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const FormSex = ({
    prevPage = "age",
    nextPage = "skin-type",
    title = "基本情報",
    progress = 20,
}: IFormSex ) => {

    const router = useRouter();

    const dispatch = useDispatch();
    const { sex } = useSelector((state: {form: IFormState}) => state.form.answers);
    
    const [ inputValue, setInputValue ] = useState<string | null>(sex === undefined ? null : sex);
    const { answers } = useSelector((state: {form: IFormState}) => state.form);
    
    const handleValueChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        if (value === inputValue) {
            setInputValue(null);
        }
        else {
            setInputValue(value);
        }
    };

    const handlePrev = () => {
        if (prevPage !== null) {
            router.push(`/form/${prevPage}`);
        }  
    }

    const handleNext = () => {
        if (inputValue !== null && nextPage !== null) {
            dispatch(setAnswer({ key: "sex", value: inputValue }));
            router.push(`/form/${nextPage}`);
        }  
    };

    const options = [
        {value: "男性", label: "男性"},
        {value: "女性", label: "女性"},
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
                        inputValue === null
                    } onClick={handleNext} />
                </div>
                <Progress text={title} value={progress} size="medium" />
                <h1 className="text-center font-bold">性別を教えてください</h1>
                <div className="flex grid grid-flow-col space-x-2 justify-stretch">
                    {
                        options.map((option) => (
                            <Option key={option.value} value={option.value} label={option.label} selected={option.value === inputValue} onClick={handleValueChange} />
                        ))
                    }
                </div>
                <AnswersList answers={answers} />
            </div>
        </main>         
    );
};

export default FormSex;
