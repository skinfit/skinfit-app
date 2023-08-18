"use client"

import { Form } from "@/components/Form";
import { SingleSelect } from "@/components/SingleSelect";
import { Action } from "@/types/props";

export default function FormSex() {

    const actions: Action = {
        "back": "/",
        "next": "/form/age",
    }

    return (
        <Form title="基本情報" progress={10} actions={actions}>
            <h1 className="font-bold text-lg text-center">あなたの性別を教えてください</h1>
            <p className="text-gray-500 text-sm text-center">※ここでの性別は生物学的な区分を指します</p>
            <SingleSelect options={[
                {value: "男性", label: "男性", selected: true},
                {value: "女性", label: "女性", selected: false},
            ]} value={"男性"} orientation="horizontal" />
        </Form>
    );
};
