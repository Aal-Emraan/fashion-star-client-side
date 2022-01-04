import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    user: {},
    admin: false,
    watches: [],
    adminLoading: true,
    glasses: [],
    jewellers: [],
    products: [],
    allProducts: [],
    viewProducts: [],
    cart: [],
    men: [],
    female: [],
    kids: [],
    loading: true,
};

export const getProducts = createAsyncThunk(
    "data/getProducts",
    async (info) => {
        const response = await axios.get(
            `https://thawing-plateau-57038.herokuapp.com/getProducts?category=${info.category}`
        );
        return response.data;
    }
);
export const getAllProducts = createAsyncThunk(
    "data/getAllProducts",
    async () => {
        const response = await axios.get(
            `https://thawing-plateau-57038.herokuapp.com/products`
        );
        return response.data;
    }
);
export const deleteProducts = createAsyncThunk(
    "data/deleteProducts",
    async (info) => {
        const response = await axios.delete(
            `https://thawing-plateau-57038.herokuapp.com/products/${info._id}`
        );
        return response.data;
    }
);
export const isAdmin = createAsyncThunk(
    'data/isAdmin',
    async (info) => {
        console.log('getting');
        const response = await axios.get(`http://localhost:5000/user/${info.email}`);
        return response.data
    }
)

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.user = {};
        },
        changeViewProducts: (state, action) => {
            console.log(action.payload);
            const typeFor = action.payload?.for;
            const changeData = state?.allProducts.filter(
                (product) => product.for === typeFor
            );
            console.log(changeData);
            state.viewProducts = changeData;
        },

        setViewProducts: (state, action) => {
            console.log(action.payload?.type);
            switch (action.payload?.type) {
                case "all":
                    state.viewProducts = state.allProducts;

                    break;

                default:
                    break;
            }
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAdminLoading: (state, action) => {
            state.adminLoading = action.payload;
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFormCart: (state, action) => {
            state.cart = state.cart.filter(item => item._id !== action.payload)
        },
        removeAllCart: (state, action) => {
            state.cart = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.allProducts = action.payload;
                state.viewProducts = action.payload;
                state.loading = false;
            })
            .addCase(getAllProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.viewProducts = action.payload;
                state.loading = false;
            })
            .addCase(deleteProducts.fulfilled, (state, action) => {
                console.log("done", action.payload);
                state.viewProducts = state?.viewProducts?.filter(
                    (product) => product._id !== action.payload._id
                );
            })
            .addCase(isAdmin.pending, (state, action) => {
                state.adminLoading = true;
            })
            .addCase(isAdmin.fulfilled, (state, action) => {
                state.admin = action.payload.admin;
                state.adminLoading = false;
            })
    },
});
export const {
    login,
    logout,
    handleProfileToggle,
    setLoading,
    addToCart,
    setMen,
    setViewProducts,
    changeViewProducts,
    removeFormCart,
    setAdminLoading,
    removeAllCart,
} = dataSlice.actions;
export const selectData = (state) => state.data;

export default dataSlice.reducer;
