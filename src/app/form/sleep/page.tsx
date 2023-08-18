"use client"

import { Form } from "@/components/Form";
import SingleSelect from "@/components/SingleSelect";
import { Action } from "@/types/props";

export default function FormSleep() {

    const actions: Action = {
        "back": "/form/skin-condition",
        "next": "/form/confirm",
    }

    return (
        <Form title="生活習慣" progress={80} actions={actions}>
            <h1 className="font-bold text-lg text-center">1日の平均的な睡眠時間を教えてください</h1>
            <SingleSelect options={[
                { "label": "4時間未満", "value": "less-than-4", selected: false },
                { "label": "4時間以上6時間未満", "value": "4-to-6", selected: false },
                { "label": "6時間以上8時間未満", "value": "6-to-8", selected: false },
                { "label": "8時間以上", "value": "more-than-8", selected: false },
            ]} value="" orientation="vertical" />
        </Form>
    );
};
