import React, {useEffect} from "react";
import {ProductInfo} from "../SingleProductPage/components/ProductInfo";
import {Box} from "@mui/material";
import {IAllData} from "../../types/share";

export const ShopItem = ({data}: { data: IAllData[] }) => {


    return (
        <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
            {data?.map((item) => (
                <ProductInfo key={item.id}
                             id={item.id}
                             title={item.title}
                             price={item.price}
                             description={item.description}
                             image={item.image}
                />
            ))}
        </Box>
    )
}