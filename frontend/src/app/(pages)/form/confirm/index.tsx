"use client"

import Button from "@/components/Button";
import AnswersList from "@/features/form/components/AnswersList";
import { IFormConfirm, IFormState } from "@/features/form/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const FormConfirm: React.FC<IFormConfirm> = ({
    prevPage = "sleep",
    nextPage = "result",
    title = "",
    progress = 100,
}) => {

    const router = useRouter();

    // Redux state
    const { answers } = useSelector((state: {form: IFormState}) => state.form);
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-start py-24 bg-white">
            <div className="flex flex-col items-left space-y-4 max-w-2xl w-full space-y-12">
                <div className="items-left w-full">
                    <Link href="/" className="text-gray-500 text-sm cursor-pointer">{'<'} トップページへ戻る</Link>
                </div>
                <div className="flex flex-row justify-between w-full">
                    <Button key="back" value="戻る" variant="outline" size="medium" disabled={
                        prevPage === null
                    } onClick={
                        prevPage === null ? () => {} : () => router.push(`/form/${prevPage}`)
                    } />
                    <Button key="next" value="確定" variant="fill" size="medium" disabled={
                        nextPage === null
                    } onClick={
                        nextPage === null ? () => {} : () => router.push(`/form/${nextPage}`)
                    } />
                </div>
                <h1 className="text-center font-bold">入力内容を確認してください</h1>
                <AnswersList answers={answers} />
            </div>
        </main> 
    );
};

export default FormConfirm;