import { prisma } from "@/lib/prisma";
import { publicProcedure, router } from "@/lib/trpc";
import { z } from "zod";

// --------------------------------------
// 症状検索API
// --------------------------------------

export const symptomRouter = router({
    // 症状一覧を取得する
    symptomGet: publicProcedure
        .query(
            async () => {
                const result = await prisma.symptom.findMany();
                return result;
            }
        ),
    // 症状を検索する
    symptomSearch: publicProcedure
        .input(z.object({
            keyword: z.string().min(1),
        }))
        .query(
            async ({ input }) => {
                console.log(input);
                const result = await prisma.symptom.findMany({    
                    where: {
                        keyword: {
                            contains: input.keyword,
                        },
                    },
                });
                return result;
            }
        ),
    // 新しい症状を作成する
    symptomCreate: publicProcedure
        .input(z.object({
            label: z.string().min(1),
            keyword: z.string().min(1),
        }))
        .mutation(async ({ input }) => {
            const symptom = await prisma.symptom.create({
                data: {
                    label: input.label,
                    keyword: input.keyword,
                },
            });
            return symptom;
        }
    ),
    // 症状を更新する
    symptomUpdate: publicProcedure
        .input(z.object({
            id: z.string().cuid(),
            label: z.string().min(1),
            keyword: z.string().min(1),
        }))
        .mutation(async ({ input }) => {
            const symptom = await prisma.symptom.update({
                where: {
                    id: input.id,
                },
                data: {
                    label: input.label,
                    keyword: input.keyword,
                },
            });
            return symptom;
        }
    ),
    // 症状を削除する
    symptomDelete: publicProcedure
        .input(z.object({
            id: z.string().cuid(),
        }))
        .mutation(async ({ input }) => {
            const symptom = await prisma.symptom.delete({
                where: {
                    id: input.id,
                },
            });
            return symptom;
        }
    ),
});