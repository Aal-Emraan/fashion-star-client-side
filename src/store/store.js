import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '../dataSlice/dataSlice';

export const store = configureStore({
    reducer: {
        data: dataSlice,
    },
});
