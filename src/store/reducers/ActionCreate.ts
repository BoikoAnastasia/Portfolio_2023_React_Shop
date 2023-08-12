import {AppDispatch} from "../store";
import {AllProductsSlice} from "../../hooks/UseAllProducts";
import {UseIdProductSlice} from "../../hooks/UseIdProduct";
import {UseCartUserSlice} from "../../hooks/UseCartUser";


const {AllProductsFetchSuccess, AllProductsFetchError, AllProductsFetch} = AllProductsSlice.actions;
const {IdProductFetchError, IdProductFetch, IdProductFetchSuccess} = UseIdProductSlice.actions;
const {CartUserFetchError, CartUserFetchSuccess, CartUserFetch} = UseCartUserSlice.actions;

export const getAllProducts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(AllProductsFetch());
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => dispatch(AllProductsFetchSuccess(json)))
    } catch (error) {
        dispatch(AllProductsFetchError(error));
    }
}

export const fetchGetProductInfo = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(IdProductFetch());
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const responseJson = await response.json();
        return dispatch(IdProductFetchSuccess(responseJson));
    } catch (error) {
        dispatch(IdProductFetchError(error));
    }
}

export const fetchCartUser = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(CartUserFetch());
        const response = await fetch(`https://fakestoreapi.com/carts/user/${id}`);
        const json = await response.json();
        return dispatch(CartUserFetchSuccess(json));
    } catch (error) {
        dispatch(CartUserFetchError(error));
    }
}
export const loginUser = async (username: string, password: string) => {
    try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const token = await response.json();
        sessionStorage.setItem('tokenData', JSON.stringify(token));
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function fetchWithAuth() {
    const auth = '/authorization';
    let tokenData = null;
    if (sessionStorage.getItem("tokenData")) {
        tokenData = JSON.parse(sessionStorage.tokenData);
    } else {
        return window.location.replace(auth);
    }
}