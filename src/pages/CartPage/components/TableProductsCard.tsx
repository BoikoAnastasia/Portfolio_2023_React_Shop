import React from 'react';
import {ICartUserData} from "../../../types/share";
import {ItemTableProducts} from "./ItemTableProducts";

export const TableProductsCard = ({data}: { data: ICartUserData[] }) => {
    return (
        <>
            {
                data && data.map((item) =>
                    <ItemTableProducts key={item.id} products={item.products}/>
                )
            }
        </>
    )
}