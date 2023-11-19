import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        // サーバーサイドでのみ利用する環境変数
        DATABASE_URL: z
            .string()
            .url(), // データベースのURL
        NODE_ENV: z
            .enum(["development", "production"])
            .default("development"), // 開発環境か本番環境か
    },
    client: {
        // クライアントサイドでのみ利用する環境変数
        NEXT_PUBLIC_SUPABASE_URL: z.string().url(), // SupabaseのURL
        NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1), // Supabaseの匿名認証キー
    },
    runtimeEnv: {
        // 環境変数のマッピング
        DATABASE_URL: process.env.DATABASE_URL,
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
});