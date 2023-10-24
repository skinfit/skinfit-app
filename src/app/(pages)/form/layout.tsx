import { FormProvider } from "@/features/form/components/FormProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SkinFit - スキンケア製品のレコメンドエンジン',
    description: 'SkinFit',
}

export default function FormLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <FormProvider>
            {children}
        </FormProvider>
    );
  }