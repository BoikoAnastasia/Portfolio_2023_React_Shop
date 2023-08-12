//react
import React, {FC, useEffect, useState} from "react";
//components
import appLayout from "../../hocs/appLayout";
//hooks
import {useAppSelector} from "../../hooks/redux";
//mui
import {Box, Button, Container, Input} from "@mui/material";

//styles
import {
    StyledTypographyProduct,
    StyledImageProductInfo,
    StyledButtonSize,
    StyledButtonChangeColor,
    StyledButtonChangeCount,
    StyledButtonsAdditional,
    StyledTypographyAdditionalInfo, StyledTypographyDescription,
} from "../ShopPage/StyledShop";

//images
import ImageDefault from '../../images/RangeImage1.png';
import {ProductAdditionInfo} from "./components/ProductAdditionInfo";
import {SliceProducts} from "../../components/SliceProducts/SliceProducts";
import {ProductBreadCrumbs} from "./components/ProductBreadCrumbs";
import {fetchGetProductInfo} from "../../store/reducers/ActionCreate";
import {useDispatch} from "react-redux";


export const SingleProductPage: FC = appLayout((): JSX.Element => {
    const dispatch = useDispatch();

    const [countProduct, setCountProduct] = useState(1);
    const [selectedBtnColor, setSelectedBtnColor] = useState<string>("");
    const {data} = useAppSelector(state => state.IdProductInfoSlice);

    const changeColorProduct = (nameBtn: string) => {
        setSelectedBtnColor(nameBtn);
    }

    const buttonSize = (size: string) => {
        return (
            <StyledButtonSize
                sx={{backgroundColor: selectedBtnColor === `${size}` ? '#b88e2f' : '#F9F1E7'}}
                onClick={() => changeColorProduct(`${size}`)}>
                {size}
            </StyledButtonSize>
        )
    }

    const buttonChangeColor = (color: string) => {
        return (
            <StyledButtonChangeColor bc={color}/>
        )
    }

    const ButtonChangeCountProduct = () => {
        return (
            <StyledButtonChangeCount>
                <Button sx={{fontSize: '16px', fontWeight: 'bold', color: '#000'}}
                        onClick={() => setCountProduct(countProduct - 1)}>-</Button>
                <span style={{fontSize: '16px', fontWeight: 'bold', color: '#000'}}>{countProduct}</span>
                <Button sx={{fontSize: '16px', fontWeight: 'bold', color: '#000'}}
                        onClick={() => setCountProduct(countProduct + 1)}>+</Button>
            </StyledButtonChangeCount>
        )
    }

    useEffect(() => {
        dispatch(fetchGetProductInfo(sessionStorage.getItem("idProduct")));
    }, [])

    return (
        <>

            {data && (
                <>
                    <Box>
                        <ProductBreadCrumbs nameProduct={data?.title}/>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-around"
                        paddingTop="32px"
                    >
                        <StyledImageProductInfo src={data?.image ? data.image : ImageDefault}/>
                        <Box width="45%">
                            <StyledTypographyProduct fs={"42"} mr={"0px"}>{data?.title}</StyledTypographyProduct>
                            <StyledTypographyProduct fs={"24"}
                                                     color={"#9F9F9F"}>Price: {data?.price}$</StyledTypographyProduct>
                            {/*    stars*/}
                            <StyledTypographyProduct fs={"13"}>{data?.description}</StyledTypographyProduct>
                            <StyledTypographyProduct fs={"14"} color={"#9F9F9F"}
                                                     mr={"22px"}>Size</StyledTypographyProduct>
                            <Box marginTop="12px">
                                {buttonSize("L")}
                                {buttonSize("XL")}
                                {buttonSize("XS")}
                            </Box>
                            <StyledTypographyProduct fs={"14"} color={"#9F9F9F"}
                                                     mr={"22px"}>Color</StyledTypographyProduct>
                            <Box margin="12px 0 23px 0">
                                {buttonChangeColor('#816DFA')}
                                {buttonChangeColor('#000')}
                                {buttonChangeColor('#b88e2f')}
                            </Box>
                            {ButtonChangeCountProduct()}
                            <StyledButtonsAdditional>Add To Cart</StyledButtonsAdditional>
                            <StyledButtonsAdditional>+ Compare</StyledButtonsAdditional>
                            <Box margin="5% 0 0 0">
                                <StyledTypographyAdditionalInfo>SKY: SS00{data?.id} </StyledTypographyAdditionalInfo>
                                <StyledTypographyAdditionalInfo>Category: {data?.category}</StyledTypographyAdditionalInfo>
                                <StyledTypographyAdditionalInfo>Tags: Sofa, Chair, Home,
                                    Shop</StyledTypographyAdditionalInfo>
                            </Box>
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="center" padding="60px 0px">
                        <StyledTypographyDescription>Description</StyledTypographyDescription>
                        <StyledTypographyDescription>Additional Information</StyledTypographyDescription>
                        <StyledTypographyDescription>Reviews [5]</StyledTypographyDescription>
                    </Box>
                    <ProductAdditionInfo/>
                    <StyledTypographyProduct fs={"36"} mr={"40px"} margin="40px 0px" textAlign="center">
                        Related
                        Products
                    </StyledTypographyProduct>
                    <SliceProducts sliceFrom={0} sliceTo={4}/>
                </>
            )}
        </>
    )
})