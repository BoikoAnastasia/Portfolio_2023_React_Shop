import React from 'react';
import {Box, Breadcrumbs, Link, Typography} from "@mui/material";
import {StyledBoxBreadCrumbsProduct} from "../../ShopPage/StyledShop";

export const ProductBreadCrumbs = ({nameProduct}: { nameProduct: string | null | undefined }) => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/"
        >
            Home
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/shop"
        >
            Shop
        </Link>,
        <Typography sx={{
            '&::before': {
                content: '""',
                width: '1px',
                height: '37px',
                display: 'inline-block',
                background: '#9F9F9F',
                margin: '-14px 34px',
            },
        }} key="3" color="text.primary">
            {nameProduct}
        </Typography>,
    ];

    return (
        <StyledBoxBreadCrumbsProduct>
            <Breadcrumbs
                sx={{
                    margin: '10px 0 0 5%',
                    '& .MuiBreadcrumbs-ol': {
                        alignItems: 'flex-end',
                    },

                }}
                separator="›"
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </StyledBoxBreadCrumbsProduct>
    )
}