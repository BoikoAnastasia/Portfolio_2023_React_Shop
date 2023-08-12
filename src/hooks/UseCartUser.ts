import {ICartUser, ICartUserData} from "../types/share";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ICartUser = {
    data: null,
    isLoading: false,
    isError: null,
}

export const UseCartUserSlice = createSlice({
    name: 'CartUser',
    initialState,
    reducers: {
        CartUserFetch: (state) => {
            state.isLoading = true;
            state.isError = null;
        },
        CartUserFetchSuccess: (state, action: PayloadAction<ICartUserData[]>) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isError = null;
        },
        CartUserFetchError: (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
        }
    }
});

export default UseCartUserSlice.reducer;