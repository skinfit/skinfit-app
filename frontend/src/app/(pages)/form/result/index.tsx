"use client"

import { IFormResult } from "@/features/form/types";
import Link from "next/link";
import React from "react";

const FormResult: React.FC<IFormResult> = () => {
    
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