"use client"

import { Form } from "@/components/Form";
import SingleSelect from "@/components/SingleSelect";
import { TextInput } from "@/components/TextInput";
import { Action } from "@/types/props";
import { useState } from "react";

export default function FormSkinCondition() {

    const actions: Action = {
        "back": "/form/skin-type",
        "next": "/form/sleep",
    }

    const [keyword, setKeyword] = useState("");

    const getRelatedSymptoms = (keyword: string) => {
        if (keyword === "ニキビ" || keyword === "にきび") {
            return (
                <>
                <p className="text-gray-500 text-sm text-center font-bold">
                    「{keyword}」に関連した症状
                </p>
                <SingleSelect options={[
                    { label: "黒いニキビ（ブラックヘッド、角栓）", value: "0", selected: false },
                    { label: "白いニキビ（膿みがかった）", value: "1", selected: false },
                    { label: "赤いニキビ（炎症）", value: "2", selected: false },
                ]} value="" orientation="vertical" />
                </>
            );
        }
        if (keyword === "") {
            return (
                <></>
            );
        }
        return (
            <p className="text-gray-500 text-sm text-center font-bold">
            「{keyword}」に関連した症状はありません
            </p>
        );
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }
    
    return (
        <Form title="肌の状態" progress={60} actions={actions}>
            <h1 className="font-bold text-lg text-center">あなたの肌はどのような状態ですか？</h1>
            <TextInput value={keyword} placeholder="例：ニキビ" align="right" onChange={onChange} />
            {getRelatedSymptoms(keyword)}
        </Form>
    );
};
