// react
import React from "react";
import {useNavigate} from 'react-router-dom';
// import {useNavigation} from '@react-navigation/native';

// images
import {ReactComponent as ImageLogo} from "../../images/logo.svg";
import {ReactComponent as IconAccount} from "../../images/headerIconAccount.svg";
import {ReactComponent as IconCart} from "../../images/headerIconCart.svg";
import {ReactComponent as IconsHeart} from "../../images/headerIconsHeart.svg";
import {ReactComponent as IconsSearch} from "../../images/headerIconsSearch.svg";

//mui
import {AppBar, Box, Toolbar, Typography, IconButton, SvgIcon} from '@mui/material';

//style
import {StyledHeaderContainer, StyledHeaderNavbar, StyledHeaderNavbarIcons} from "./StylesLayout";


export const Header = () => {
    const navigate = useNavigate();

    const handleNavigateToHome = async () => {
        navigate('/');
    }
    const handleNavigateToShop = async () => {
        navigate('/shop');
    }
    const handleNavigateToAbout = async () => {
        navigate('/about');
    }
    const handleNavigateToAuthorization = async () => {
        navigate('/authorization');
    }

    const navigationButton = (icon: any, path: string) => {
        return (
            <Box>
                <IconButton onClick={() => navigate(`${path}`)} sx={{color: '#fff'}}>
                    <SvgIcon component={icon} width="50px" height="50px" viewBox="1 0 25 25"/>
                </IconButton>
            </Box>
        );
    };

    return (
        <AppBar position="static" color="inherit"
                sx={{
                    padding: '20px 10px',


                }}>
            <StyledHeaderContainer>
                <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <ImageLogo/>
                    <Typography fontSize="34px" fontWeight="bold">Furniro</Typography>
                </Toolbar>
                <StyledHeaderNavbar>
                    <Box sx={{cursor: 'pointer'}}>
                        <Typography textAlign="center" onClick={handleNavigateToHome}>Home</Typography>
                    </Box>
                    <Box sx={{cursor: 'pointer'}}>
                        <Typography textAlign="center" onClick={handleNavigateToShop}>Shop</Typography>
                    </Box>
                    <Box sx={{cursor: 'pointer'}}>
                        <Typography textAlign="center" onClick={handleNavigateToAbout}>About</Typography>
                    </Box>
                    <Box sx={{cursor: 'pointer'}}>
                        <Typography textAlign="center" onClick={handleNavigateToAuthorization}>Auth</Typography>
                    </Box>
                </StyledHeaderNavbar>
                <StyledHeaderNavbarIcons>
                    {navigationButton(IconAccount, '/account')}
                    {navigationButton(IconCart, '/cart')}
                    {navigationButton(IconsHeart, '/heart')}
                    {navigationButton(IconsSearch, '/search')}
                </StyledHeaderNavbarIcons>
            </StyledHeaderContainer>

        </AppBar>
    )
}