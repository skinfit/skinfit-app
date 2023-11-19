"use client"

import { Provider } from 'react-redux';
import store from '../stores';
import { IFormProvider } from '../types';

export const FormProvider = ({children}: IFormProvider) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};