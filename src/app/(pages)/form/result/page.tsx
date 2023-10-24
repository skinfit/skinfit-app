"use client"

import { IFormResult, IFormState } from "@/features/form/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

export const FormResult: React.FC<IFormResult> = () => {

    const router = useRouter();

    const { answers } = useSelector((state: {form: IFormState}) => state.form);
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-start py-24 bg-white">
            <div className="flex flex-col items-left space-y-4 max-w-2xl w-full space-y-12">
                <div className="items-left w-full">
                    <Link href="/" className="text-gray-500 text-sm cursor-pointer">{'<'} トップページへ戻る</Link>
                </div>
                <h1 className="text-center font-bold">結果</h1>
            </div>
        </main> 
    );
};

export default FormResult;