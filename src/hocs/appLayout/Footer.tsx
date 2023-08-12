import React from "react";
import {AppBar, Button, Container, Input, Typography} from "@mui/material";
import {
    StyledFooterBox,
    StyledFooterBoxTypography, StyledFooterBoxTypographyGray, StyledFooterButton,
    StyledFooterContainer,
} from "./StylesLayout";

export const Footer = () => {
    return (
        <AppBar position="static" color="inherit" sx={{
            padding: '48px 100px', maxHeight: '550px', '@media (max-width: 570px)': {
                padding: '48px 50px',
            },
        }}>
            <StyledFooterContainer>
                <StyledFooterBox>
                    <Typography fontSize="24px" fontWeight="bold">Funiro.</Typography>
                    <StyledFooterBoxTypographyGray>
                        400 University Drive Suite 200 Coral <br/>
                        Gables, FL 33134 USA
                    </StyledFooterBoxTypographyGray>
                </StyledFooterBox>
                <StyledFooterBox sx={{
                    '@media (max-width: 500px)': {
                        display: 'none',
                    },
                }}>
                    <StyledFooterBoxTypographyGray>
                        Links
                    </StyledFooterBoxTypographyGray>
                    <StyledFooterBoxTypography>Home</StyledFooterBoxTypography>
                    <StyledFooterBoxTypography>Shop</StyledFooterBoxTypography>
                    <StyledFooterBoxTypography>About</StyledFooterBoxTypography>
                    <StyledFooterBoxTypography>Contact</StyledFooterBoxTypography>
                </StyledFooterBox>
                <StyledFooterBox sx={{
                    '@media (max-width: 500px)': {
                        display: 'none',
                    },
                }}>
                    <StyledFooterBoxTypographyGray>
                        Help
                    </StyledFooterBoxTypographyGray>
                    <StyledFooterBoxTypography>Payment Options</StyledFooterBoxTypography>
                    <StyledFooterBoxTypography>Returns</StyledFooterBoxTypography>
                    <StyledFooterBoxTypography>Privacy Policies</StyledFooterBoxTypography>
                </StyledFooterBox>
                <StyledFooterBox>
                    <StyledFooterBoxTypographyGray>
                        Newsletter
                    </StyledFooterBoxTypographyGray>
                    <StyledFooterContainer>
                        <Input placeholder="Enter Your Email Address" sx={{fontSize: '14px'}}/>
                        <StyledFooterButton>SUBSCRIBE</StyledFooterButton>
                    </StyledFooterContainer>
                </StyledFooterBox>
            </StyledFooterContainer>
            <Container sx={{marginTop: '40px'}}>
                2023 furino. All rights reverved
            </Container>
        </AppBar>
    )
}