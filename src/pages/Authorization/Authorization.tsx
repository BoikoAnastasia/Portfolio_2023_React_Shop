import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";

//components
import appLayout from "../../hocs/appLayout";
import {loginUser} from "../../store/reducers/ActionCreate";

//mui
import {Box, Input} from "@mui/material";

//style
import {StyledBoxAuth, StyledButtonAuth, StyledButtonAuthTitle} from "./StyledAuth";

export const Authorization: FC = appLayout((): JSX.Element => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(true);
    const [isReg, setIsReg] = useState(false);

    const [userNickname, setUserNickname] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");

    const changeFormAuth = () => {
        setIsAuth(true);
        setIsReg(false);
    }

    const changeFormReg = () => {
        setIsReg(true);
        setIsAuth(false);
    }

    const CheckUserAuth = async () => {
        const isRight = await loginUser(userNickname, userPassword);
        if (isRight) {
            navigate('/');
        }
    }

    return (
        <Box sx={{position: 'relative', height: '80vh'}}>
            <StyledBoxAuth>
                <Box>
                    <StyledButtonAuthTitle onClick={changeFormAuth}>Авторизация</StyledButtonAuthTitle>
                    <StyledButtonAuthTitle onClick={changeFormReg}>Регистрация</StyledButtonAuthTitle>
                </Box>
                {isAuth && (
                    <>
                        <Input placeholder="username" onChange={(e) => setUserNickname(e.target.value)}
                               value={userNickname}></Input>
                        <Input placeholder="password" type="password" onChange={(e) => setUserPassword(e.target.value)}
                               value={userPassword}></Input>
                        <StyledButtonAuth disabled={!userNickname || !userPassword}
                                          onClick={CheckUserAuth}>Войти</StyledButtonAuth>
                    </>
                )}
                {/*TODO*/}
                {isReg && (
                    <>
                        <Input placeholder="username"></Input>
                        <Input placeholder="email" type="email"></Input>
                        <Input placeholder="phone" type="tel"></Input>
                        <Input placeholder="address"></Input>
                        <Input placeholder="password" type="password"></Input>
                        <StyledButtonAuth>Регистрация</StyledButtonAuth>
                    </>
                )}
            </StyledBoxAuth>
        </Box>
    )
});