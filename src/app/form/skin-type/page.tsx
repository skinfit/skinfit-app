"use client"

import { Form } from "@/components/Form";
import SingleSelect from "@/components/SingleSelect";
import { Action } from "@/types/props";

export default function FormSkinType() {

    const actions: Action = {
        "back": "/form/age",
        "next": "/form/skin-condition",
    }

    return (
        <Form title="肌タイプ" progress={40} actions={actions}>
            <h1 className="font-bold text-lg text-center">あなたの肌タイプを教えてください</h1>
            <SingleSelect options={[
                { "label": "乾燥肌", "value": "dry", selected: false },
                { "label": "普通肌", "value": "normal", selected: false },
                { "label": "脂性肌", "value": "oily", selected: false },
                { "label": "混合肌", "value": "mixed", selected: false },
                { "label": "敏感肌", "value": "sensitive", selected: false },
            ]} value="" orientation="horizontal" />
        </Form>
    );
};
