import React, {useEffect} from "react";
import {ICartUserDataProducts} from "../../../types/share";
import {useDispatch} from "react-redux";
import {Box} from "@mui/material";
import {fetchGetProductInfo} from "../../../store/reducers/ActionCreate";
import {useAppSelector} from "../../../hooks/redux";
import {AppDispatch} from "../../../store/store";

export const ItemTableProducts = ({products}: { products: ICartUserDataProducts[] }) => {

    // products.map((product) => {
    //     const response = await fetch(`https://fakestoreapi.com/products/${product.productId}`);
    //     const responseJson = await response.json();
    //     return responseJson;
    // });


    // const getInfo = (productId) => {
    //     dispatch(fetchGetProductInfo(productId));
    // }
    // products.map((item) =>
    //     (console.log(item.productId))
    // )
    return (
        <>
            <Box display="flex" flexDirection="column">

            </Box>
        </>
    )
}