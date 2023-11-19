import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SkinFit - スキンケア製品のレコメンドエンジン',
    description: 'SkinFit',
}

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <main className="flex flex-col items-center justify-start bg-white min-h-screen">
                <div className='flex flex-col items-center justify-start max-w-md my-24 space-y-12'>
                    <div>
                        <Link href='/'>
                            <Image src='/logo.png' alt='logo' width={30} height={30} />
                        </Link>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
  }