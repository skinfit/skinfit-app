import { FormProvider } from "@/features/form/components/FormProvider"

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