import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
const initialState = {
    watches: [],
    glasses: [],
    jewellers: []
};


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
        handleProfileToggle: (state, action) => {
            state.profileToggle = !state.profileToggle;
        }
    },
});
export const { login, logout, handleProfileToggle, setLoading } = dataSlice.actions;
export const selectData = (state) => state.data;

export default dataSlice.reducer;