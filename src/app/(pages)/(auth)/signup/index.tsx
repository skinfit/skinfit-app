"use client";

import { Logo } from '@/components/Logo';
import { useAuth } from '@/features/auth/hooks/auth';
import Link from 'next/link';

export default function SignUpPage() {

    const { user, error, signUpWithEmail, signInWithProvider, signOut } = useAuth();
    
    const handleSubmitWithEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        await signUpWithEmail(email, password);
    }

    if (user) {
        return (
            <>
                <p className='text-large text-center'>既に{ user.email }でログインしています</p>
                <Link href="/" className="text-blue-500 cursor-pointer">ホームに戻る</Link>
                <button className="rounded px-4 py-4 font-semibold focus:outline-none bg-red-500 text-white focus:border-red-700 autofill:bg-transparent" onClick={signOut}>ログアウト</button>
            </>
        )
    }

    else {
        return (
                <div className='flex flex-col space-y-4'>
                    <form className='flex flex-col space-y-4' onSubmit={handleSubmitWithEmail}>
                        <div className="flex flex-col space-y-2">
                            <p className="text-red-400 text-sm text-left font-semibold">メールアドレス</p>
                            <input className="border border-red-500 rounded px-4 py-4 focus:outline-none bg-transparent focus:border-red-700 autofill:bg-transparent" type="email" name="email" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-red-400 text-sm text-left font-semibold">パスワード</p>
                            <input className="border border-red-500 rounded px-4 py-4 focus:outline-none bg-transparent focus:border-red-700 autofill:bg-transparent" type="password" name="password" />
                        </div>
                        <button className="rounded px-4 py-4 font-semibold focus:outline-none bg-red-500 text-white focus:border-red-700 autofill:bg-transparent" type="submit">新規登録</button>
                    </form>
                    { error && <p className="text-red-400 text-sm text-center">{error.message}</p> }
                    <p className="text-gray-500 text-md text-center">
                         ログインは<Link href="/login" className="text-red-400 cursor-pointer mx-2 font-semibold">こちら</Link>
                    </p>
                    <p className="text-gray-500 text-md text-center">または</p>
                    <button className="flex flex-row items-center justify-left rounded border border-red-500 px-8 py-4 focus:outline-none bg-transparent space-x-4 hover:bg-red-100 focus:border-red-700 autofill:bg-transparent" onClick={() => signInWithProvider("google")}>
                        <Logo name="google" />
                        <p className='text-red-500'>Googleでサインイン</p>
                    </button>
                    <button className="flex flex-row items-center justify-left rounded border border-red-500 px-8 py-4 focus:outline-none bg-transparent space-x-4 hover:bg-red-100 focus:border-red-700 autofill:bg-transparent" onClick={() => signInWithProvider("apple")}>
                        <Logo name="apple" />
                        <p className='text-red-500'>Appleでサインイン</p>
                    </button>
                </div>
        )
    }
}
