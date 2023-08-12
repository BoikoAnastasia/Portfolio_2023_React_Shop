import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AllProductsState, IAllData} from "../types/share";

const initialState: AllProductsState = {
    data: [],
    isLoading: false,
    isError: null,
};

export const AllProductsSlice = createSlice({
    name: 'AllProducts',
    initialState,
    reducers: {
        AllProductsFetch: (state) => {
            state.isError = null;
            state.isLoading = true;
        },
        AllProductsFetchSuccess: (state, action: PayloadAction<IAllData[]>) => {
            state.data = action.payload;
            state.isError = null;
            state.isLoading = false;
        },
        AllProductsFetchError: (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
        },
    },
});

export default AllProductsSlice.reducer;