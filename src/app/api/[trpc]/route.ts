import { symptomRouter } from '@/features/symptom/api';
import { userRouter } from '@/features/user/api';
import { mergeRouters } from "@/lib/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export const appRouter = mergeRouters(userRouter, symptomRouter);

export type AppRouter = typeof appRouter;

// see: https://trpc.io/docs/server/adapters/nextjs#route-handlers
const handler = (req: Request) => {
    return fetchRequestHandler({
        endpoint: "/api",
        req,
        router: appRouter,
        createContext: () => ({}),
    });
}

export { handler as GET, handler as POST };
