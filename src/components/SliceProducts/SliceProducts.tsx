import React, {useEffect} from "react";
import {ShopItem} from "../../pages/ShopPage/ShopItem";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/redux";
import {getAllProducts} from "../../store/reducers/ActionCreate";
import {Box} from "@mui/material";
import {ButtonShowMore} from "../StylesComponents";
import {useNavigate} from "react-router-dom";

export interface ISliceProducts {
    sliceFrom: number,
    sliceTo: number,
}


export const SliceProducts = ({sliceFrom, sliceTo}: ISliceProducts) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data} = useAppSelector((state) => state.AllProductsSlice);

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    const showMoreProduct = () => {
        navigate('/shop');
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            {data && <ShopItem data={data.slice(sliceFrom, sliceTo)}/>}
            <ButtonShowMore onClick={showMoreProduct}>Show More</ButtonShowMore>
        </Box>
    )
}
