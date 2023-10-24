export interface IFormAnswers {
    age?: number;
    sex?: string;
    skinTypes?: string[];
    symptoms?: string[];
    bedTime?: string;
    wakeUpTime?: string;
}

export type TQuestionKey = keyof IFormAnswers;

// フォームの型
export interface IFormState {
    answers: IFormAnswers;
}

// フォームプロバイダーの型
export interface IFormProvider {
    children: React.ReactNode;
}

// フォームページの型
export interface IFormBase {
    prevPage: string | null;
    nextPage: string | null;
    title: string;
    progress: number;
};

// 年齢フォームの型
export interface IFormAge extends IFormBase {
    min?: number;
    max?: number;
};

// 性別フォームの型
export interface IFormSex extends IFormBase {
};

// 肌タイプフォームの型
export interface IFormSkinType extends IFormBase {
};

// 肌状態フォームの型
export interface IFormSymptom extends IFormBase {
};

// 睡眠時間フォームの型
export interface IFormSleep extends IFormBase {
};