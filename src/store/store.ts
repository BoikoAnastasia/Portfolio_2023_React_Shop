import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AllProductsSlice from "../hooks/UseAllProducts";
import IdProductInfoSlice from '../hooks/UseIdProduct';
import UseCartUserSlice from "../hooks/UseCartUser";

const rootReducer = combineReducers({
    AllProductsSlice,
    IdProductInfoSlice,
    UseCartUserSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];