import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAllData, ProductInfoState} from "../types/share";

const initialState: ProductInfoState = {
    data: null,
    isLoading: false,
    isError: null,
}

export const UseIdProductSlice = createSlice({
    name: 'IdProduct',
    initialState,
    reducers: {
        IdProductFetch: (state) => {
            state.isLoading = true;
            state.isError = null;
        },
        IdProductFetchSuccess: (state, action: PayloadAction<IAllData>) => {
            state.data = action.payload;
            state.isError = null;
            state.isLoading = false;
        },
        IdProductFetchError: (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
        },
    },
});

export default UseIdProductSlice.reducer;