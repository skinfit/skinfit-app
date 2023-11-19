import { Icon } from "@/components/Icon";
import { useRouter } from "next/navigation";

interface IAnswersList {
    answers?: { [key: string]: any };
}

const answerLabels: { [key: string]: string } = {
    "age": "年齢",
    "sex": "性別",
    "skinTypes": "肌質",
    "symptoms": "症状",
    "bedTime": "就寝時間",
    "wakeUpTime": "起床時間",
};

const answerPages: { [key: string]: string } = {
    "age": "age",
    "sex": "sex",
    "skinTypes": "skin-type",
    "symptoms": "symptom",
    "bedTime": "sleep",
    "wakeUpTime": "sleep",
};

export const AnswersList = ({ answers = {} }: IAnswersList) => {
    const router = useRouter();

    const handleEditClick = (key: string) => {
        const page = answerPages[key];
        router.push(`/form/${page}`);
    };

    const handleDeleteClick = (key: string, value: string) => {
        if (Array.isArray(answers[key]) && answers[key].length <= 1) {
            alert("最後の一つの項目は削除できません！");
            return;
        }
        // この部分でデータの更新やstate管理などを行う処理を追加
    };

    if (answers === undefined || Object.keys(answers).length === 0) {
        return null;
    } else {
        return (
            <div className="w-full space-y-4 border-2 border-red-500 rounded px-8 py-4 bg-red-50">
                <div className="flex flex-col space-y-2">
                    <p className="text-gray-400 text-xs font-bold text-center">入力した情報</p>
                    {
                        Object.keys(answers).map((key) => (
                            <div key={`answer_${key}`} className="flex flex-row space-x-4 justify-end items-center">
                                <p className="text-gray-500 text-xs font-semibold text-left">{answerLabels[key]}</p>
                                <div className="flex flex-row space-x-4 flex-wrap justify-end w-2/3">
                                    {Array.isArray(answers[key]) ? answers[key].map((value: string) => (
                                        <span className="flex flex-row space-x-2 items-center" key={value}>
                                            <p className="text-gray-700 text-xs font-semibold">{value}</p>
                                            <button onClick={() => handleDeleteClick(key, value)}>
                                                <Icon name="cancel" variant="outline" size="small" />
                                            </button>
                                        </span>
                                    )) : <p className="text-gray-700 text-xs font-semibold">{answers[key]}</p>}
                                    
                                </div>
                                <button onClick={() => handleEditClick(key)}>
                                    <Icon name="edit" variant="outline" size="small" />
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
};

export default AnswersList;
