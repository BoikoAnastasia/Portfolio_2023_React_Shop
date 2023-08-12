// react
import React, {useEffect, FC} from "react";
import {useDispatch} from "react-redux";
//store
import {getAllProducts} from "../../store/reducers/ActionCreate";
//hooks
import {useAppSelector} from "../../hooks/redux";

//components
import appLayout from "../../hocs/appLayout";
import {TopBorder} from "../../components/topBorder/TopBorder";
import {ShopItem} from "./ShopItem";

export const ShopPage: FC = appLayout((): JSX.Element => {
    const dispatch = useDispatch();
    const {data} = useAppSelector((state) => state.AllProductsSlice);

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    return (
        <>
            <TopBorder title={"Shop"} breadcrumbStart={"Home"} breadcrumbNow={"Shop"} path={'/'}/>
            {/*TODO*/}
            {/*    Blocksort*/}
            {data && <ShopItem data={data}/>}
        </>
    )
});