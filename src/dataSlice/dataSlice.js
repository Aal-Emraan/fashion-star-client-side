import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    watches: [],
    glasses: [],
    jewellers: [],
    cart: [],
    loading: false,
};

export const getWatches = createAsyncThunk(
    'data/getWatches',
    async () => {
        const response = await axios.get('./products.json');
        return response.data;
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = null
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWatches.fulfilled, (state, action) => {
                state.glasses = action.payload
            })
    },
});
export const { login, logout, handleProfileToggle, setLoading, addToCart } = dataSlice.actions;
export const selectData = (state) => state.data;

export default dataSlice.reducer;