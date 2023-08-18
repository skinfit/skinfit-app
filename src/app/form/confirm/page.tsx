"use client"

import { Form } from "@/components/Form";
import { Action } from "@/types/props";

export default function FormConfirm() {

    const actions: Action = {
        "back": "/form/sleep",
        "next": "/form/info",
    }
    
    return (
        <Form title="確認" progress={100} actions={actions}>
            <h1 className="font-bold text-lg text-center">入力内容を確認してください</h1>
        </Form>
    );
};
