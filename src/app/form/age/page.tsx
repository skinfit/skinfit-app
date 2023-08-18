"use client"

import { Form } from "@/components/Form";
import { NumberInput } from "@/components/NumberInput";
import { Action } from "@/types/props";

export default function FormAge() {

    const actions: Action = {
        "back": "/form/sex",
        "next": "/form/skin-type",
    }

    return (
        <Form title="基本情報" progress={20} actions={actions}>
            <h1 className="font-bold text-lg text-center">あなたの年齢を教えてください</h1>
            <NumberInput />
        </Form>
    );
};
