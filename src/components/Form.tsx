"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Action } from "../types/props";
import { Button } from "./Button";
import { Progress } from "./Progress";

interface FormProps {
    children: React.ReactNode;
    title?: string;
    progress?: number;
    actions?: Action;
};

export const Form = ({
    children,
    title = "",
    progress = 0,
    actions = {},
}: FormProps) => {

    const router = useRouter();

    const route = (src: string) => {
        router.push(src);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-start py-24 bg-white">
            <div className="flex flex-col items-left space-y-4 max-w-2xl w-full space-y-12">
                <div className="items-left w-full">
                    <Link href="/" className="text-gray-500 text-sm cursor-pointer">{'<'} トップページへ戻る</Link>
                </div>
                <div className="items-center w-full">
                    <Progress text={title} value={progress} size="medium" />
                </div>
                {children}
                <div className="flex flex-row justify-between w-full">
                    {
                        actions["back"] ? <Button key="back" value="戻る" variant="outline" size="medium" onClick={() => route(actions["back"])} /> : <Button key="back" value="戻る" variant="outline" size="medium" disabled={true} />
                    }
                    {
                        actions["next"] ? <Button key="next" value="次へ" variant="fill" size="medium" onClick={() => route(actions["next"])} /> : <Button key="next" value="次へ" variant="fill" size="medium" disabled={true} />
                    }
                </div>
            </div>
        </main>
    );
};

export default Form;



