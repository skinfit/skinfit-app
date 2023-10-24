"use client";

import { AppRouter } from "@/app/api/[trpc]/route";
import { Button } from "@/components/Button";
import { Progress } from "@/components/Progress";
import { Option } from "@/components/Select";
import AnswersList from "@/features/form/components/AnswersList";
import { setAnswer } from "@/features/form/stores/formSlice";
import { IFormState, IFormSymptom } from "@/features/form/types";
import { Symptom } from "@prisma/client";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type TStatus = 'IDLE' | 'TYPING' | 'SEARCHING' | 'DONE';

interface IListSymptoms {
    symptoms?: string[];
}

function ListSymptoms({
    symptoms = [],
}: IListSymptoms) {

    if (symptoms === undefined || symptoms.length === 0) {
        return <p className="text-gray-400 text-xs font-bold text-center">選択された症状はありません</p>
    }
    else {
        return (
            <div className="w-full space-y-4 border-2 border-red-500 rounded px-8 py-4">
                <div className="flex flex-col space-y-2">
                    <p className="text-gray-400 text-xs font-bold text-center">選択された症状</p>
                    <div className="flex flex-col space-y-4">
                    {
                        symptoms?.map((symptom) => (
                            <p key={`symptom_${symptom}`} className="text-gray-700 text-xs font-semibold text-left">・{symptom}</p>
                        ))
                    }
                    </div>
                </div>
            </div>
        );
    }
};

export default function FormSymptom({
    prevPage = "skin-type",
    nextPage = "sleep",
    title = "肌について",
    progress = 40,
}: IFormSymptom ) {

    const router = useRouter();

    // Redux state
    const dispatch = useDispatch();

    const { symptoms } = useSelector((state: {form: IFormState}) => state.form.answers);
    const { answers } = useSelector((state: {form: IFormState}) => state.form);
    
    const [ inputValue, setInputValue ] = useState<string>("");
    const [ inputValues, setInputValues ] = useState<string[]>(symptoms === undefined ? [] : symptoms);
    const [ status, setStatus ] = useState<TStatus>("IDLE");
    const [ results, setResults ] = useState<Symptom[]>([]);
    const [ error, setError ] = useState<string | null>(null);

    const client = createTRPCProxyClient<AppRouter>({ 
        links: [
            httpBatchLink({ 
                url: "http://localhost:3000/api",
                maxURLLength: 1000,
            })],
    });

    const fetchSearchResults = async (keyword: string): Promise<Symptom[]> => {
        const _results = await client.symptomSearch.query({
            keyword: keyword,
        });
        return _results;
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
    
        if (inputValue) {
          setStatus('TYPING');
          timeoutId = setTimeout(() => {
            setStatus('SEARCHING');
            setError(null);
            setResults([]);
            fetchSearchResults(inputValue).then((res) => {
                if (res.length === 0) {
                    setError("該当する症状が見つかりませんでした");
                    setResults([]);
                } else {
                    setError("以下から当てはまる症状を選択してください");
                    setResults(res);
                }
                setStatus('DONE'); 
            });
          }, 1000);
        } else {
          setStatus('IDLE');
          setError(null);
          setResults([]);
        }
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, [inputValue]);

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
    };

    const handleValueSelected = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        if (inputValues.includes(value)) {
            setInputValues(inputValues.filter((v) => v !== value));
        }
        else {
            setInputValues([...inputValues, value]);
        }
    }

    const handlePrev = () => {
        if (prevPage !== null) {
            router.push(`/form/${prevPage}`);
        }
    }

    const handleNext = () => {
        if (inputValues.length > 0 ) {
            dispatch(setAnswer({ key: "symptoms", value: inputValues }));
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
                        inputValues.length === 0
                    } onClick={handleNext} />
                </div>
                <Progress text={title} value={progress} size="medium" />
                <h1 className="text-center font-bold">肌に関する悩みや症状を入力してください（複数指定可）</h1>
                <div className='space-y-2 flex flex-col'>
                    <input type="text" inputMode="text"
                        className="text-500 text-right font-bold border-2 border-red-500 rounded px-4 py-2 focus:outline-none focus:border-red-700"
                        placeholder="例: ニキビ、シワ、毛穴"
                        value={inputValue}
                        onChange={handleValueChange}
                    />
                </div>
                {
                    error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>
                }
                {
                    status === "SEARCHING" && <p className="text-black-500 text-xs font-bold text-center">検索中...</p>
                }
                {
                    results.map((result) => (
                        <Option key={result.id} value={result.label} label={result.label} selected={inputValues.includes(result.id)} onClick={handleValueSelected} />
                    ))
                }
                <ListSymptoms symptoms={inputValues} />
                <AnswersList answers={answers} />
            </div>
        </main>         
    );
};
