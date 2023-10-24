import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import formReducer from './formSlice';

const store = configureStore({
    reducer: combineReducers({
        form: formReducer
    })
});

export default store;