//react
import React, {useEffect} from "react";
//styles
import {StyledBoxProduct, StyledImageProduct, StyledTypographyProduct} from "../../ShopPage/StyledShop";
//images
import DefaultImage from '../../../images/RangeImage1.png';
//helpers
import {SplitString} from "../../../helpers/SplitString";
import {fetchGetProductInfo} from "../../../store/reducers/ActionCreate";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

export type IProductInfoProps = {
    id: number | null,
    title: string | null,
    price: number | null,
    description: string | null,
    image: string | null,
}

export const ProductInfo = ({title, price, description, image, id}: IProductInfoProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getProductInfo = (id: number) => {
        dispatch(fetchGetProductInfo(id));
        navigate(`/product/:${id}`);
    }

    const saveIdProduct = (id: number | null) => {
        sessionStorage.setItem('idProduct', JSON.stringify(id));
    }

    useEffect(() => {
        saveIdProduct(id);
    }, [id])

    return (
        <StyledBoxProduct onClick={() => getProductInfo(id)}>
            <StyledImageProduct src={image ? image : DefaultImage}/>
            <StyledTypographyProduct fs={"24px"}
                                     fontWeight="bold">{SplitString(title, 3)}</StyledTypographyProduct>
            <StyledTypographyProduct fs={"16px"}
                                     color={"#898"}>{SplitString(description, 3)}</StyledTypographyProduct>
            <StyledTypographyProduct fs={"20px"}>Цена: {price}$</StyledTypographyProduct>
        </StyledBoxProduct>
    )
}