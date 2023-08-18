"use client";

import { useRouter } from "next/navigation";
import { Button } from "../components/Button";

export default function Home() {

    const router = useRouter();

    const onClickForm = () => {
        router.push("/form/sex");
    };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 space-y-12 bg-white">
    <div className="flex flex-col items-center space-y-4">
        <h1 className="font-bold text-2xl text-center">SkinFit</h1>
        <p className="text-gray-500 text-md text-center">
        簡単なアンケートであなたの肌を診断し、<br/>AIが最適なスキンケア製品を探します
        </p>
    </div>
    <div className="flex flex-col items-center space-y-4">
        <Button value="診断を始める" variant="fill" size="medium" onClick={onClickForm} />
        <Button value="アカウント登録" variant="outline" size="medium" />
    </div>
    </main>
  )
}
