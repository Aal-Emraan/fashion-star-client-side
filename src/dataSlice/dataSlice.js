import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    watches: [],
    glasses: [],
    jewellers: [],
    products: [],
    allProducts: [],
    viewProducts: [],
    cart: [],
    men: [],
    female: [],
    kids: [],
    loading: false,
};

export const getProducts = createAsyncThunk(
    'data/getProducts',
    async (info) => {
        const response = await axios.get(`http://localhost:5000/getProducts?category=${info.category}`);
        return response.data;
    }
)
export const getAllProducts = createAsyncThunk(
    'data/getAllProducts',
    async () => {
        console.log('dfffdfedfd');
        const response = await axios.get(`http://localhost:5000/products`);
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
        changeViewProducts: (state, action) => {
            console.log(action.payload);
            const typeFor = action.payload?.for;
            const changeData = state?.allProducts.filter(product => product.for === typeFor)
            console.log(changeData);
            state.viewProducts = changeData;
        },

        setViewProducts: (state, action) => {
            console.log(action.payload?.type);
            switch (action.payload?.type) {
                case 'all':
                    state.viewProducts = state.allProducts

                    break;

                default:
                    break;
            }
            state.men = null
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
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.allProducts = action.payload;
                state.viewProducts = action.payload
                state.loading = false;
            })
            .addCase(getAllProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.viewProducts = action.payload;
                state.loading = false;
            })
    },
});
export const { login, logout, handleProfileToggle, setLoading, addToCart, setMen, setViewProducts, changeViewProducts } = dataSlice.actions;
export const selectData = (state) => state.data;

export default dataSlice.reducer;