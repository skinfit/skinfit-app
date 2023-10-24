import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFormState, TQuestionKey } from '../types';

const initialState: IFormState = {
    answers: {},
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        // set the answer for a given question
        setAnswer: (state: IFormState, action: PayloadAction<{ key: TQuestionKey, value: any }>) => {
            state.answers = {
                ...state.answers,
                [action.payload.key]: action.payload.value,
            };
        },
        // unset the answer for a given question
        clearAnswer: (state: IFormState, action: PayloadAction<{ key: TQuestionKey }>) => {
            delete state.answers[action.payload.key];
        },
    },
});

export const { setAnswer, clearAnswer } = formSlice.actions;
export default formSlice.reducer;