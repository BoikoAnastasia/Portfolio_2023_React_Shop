import React, {FC, useEffect} from 'react';
import {TopBorder} from "../../components/topBorder/TopBorder";
import appLayout from "../../hocs/appLayout";
import {TableProductsCard} from "./components/TableProductsCard";
import {fetchCartUser, fetchGetProductInfo, fetchWithAuth, loginUser} from "../../store/reducers/ActionCreate";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/redux";
import {StyledloadingCircle} from "../../components/StylesComponents";

export const CartPage: FC = appLayout((): JSX.Element => {
    const dispatch = useDispatch();
    const {data} = useAppSelector(state => state.UseCartUserSlice);
    useEffect(() => {
        fetchWithAuth();
        dispatch(fetchCartUser(1));
    }, [])

    return (
        <>
            <TopBorder title={"Cart"} path={"/"} breadcrumbNow={"Cart"} breadcrumbStart={"Home"}/>
            {
                data && (
                    <TableProductsCard data={data}/>
                )
            }
        </>
    )
})