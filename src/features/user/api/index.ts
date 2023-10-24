import { publicProcedure, router } from "@/lib/trpc";

export const userRouter = router({
    userList: publicProcedure.query(() => {
      return [];
    }),
  });