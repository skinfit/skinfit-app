"use client";

import { Button } from "@/components/Button";
import { useAuth } from "@/features/auth/hooks/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter();

    const { session, user, loading, signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
        router.push("/");
    }

    if (loading) {
        return (
            <>
                <header>
                    <title>SkinFit - スキンケア製品のレコメンドエンジン</title>
                    <meta name="description" content="SkinFit" />
                    <link rel="icon" href="/favicon.ico" />
                </header>
                <main className="flex min-h-screen flex-col items-center justify-start p-24 space-y-12 bg-white">
                    
                </main>
            </>
        )
    }

    return (
        <>
            <header>
                <title>SkinFit - スキンケア製品のレコメンドエンジン</title>
                <meta name="description" content="SkinFit" />
                <link rel="icon" href="/favicon.ico" />
            </header>
            <main className="flex min-h-screen flex-col items-center justify-start p-24 space-y-12 bg-white">
                <div className="flex flex-col items-center space-y-4">
                    <h1 className="font-bold text-2xl text-center">SkinFit</h1>
                    <p className="text-gray-500 text-md text-center">
                    簡単なアンケートであなたの肌を診断し、<br/>AIが最適なスキンケア製品を探します
                    </p>
                    { user ? (
                        <div className="flex flex-col items-center space-y-2">
                            <p className="text-gray-500 text-md text-center">{user?.email}でログイン中</p>
                            <button className="text-red-300 font-semibold cursor-pointer" onClick={handleSignOut}>サインアウト</button>
                        </div>
                    ) : null }
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <Button value="診断を始める" variant="fill" size="medium" onClick={() => router.push("/form/age")} />
                    <Button value="新規登録" variant="outline" size="medium" onClick={() => router.push("/signup")} /> 
                    { user ? null : (
                        <p className="text-gray-500 text-md text-center">
                            ログインは<Link href="/login" className="text-red-300 font-semibold cursor-pointer">こちら</Link>
                        </p>
                    ) }
                </div>
            </main>
        </>
    )
}
