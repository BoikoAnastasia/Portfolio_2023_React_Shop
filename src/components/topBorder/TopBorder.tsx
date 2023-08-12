//react
import React from 'react';

//components
import {StyledBoxTopBorder, StyledImage, StyledLinkTopBorder} from "../StylesComponents";

//images
import ImageBack from '../../images/HeaderBackground.png';
import {Box, Breadcrumbs, Link, Typography} from "@mui/material";

export interface ITopBorderProps {
    title: string,
    breadcrumbStart: string,
    breadcrumbNow: string,
    path: string,
}

export const TopBorder = ({title, breadcrumbStart, breadcrumbNow, path}: ITopBorderProps) => {
    return (
        <div style={{position: 'relative'}}>
            <StyledImage src={ImageBack}/>
            <StyledBoxTopBorder>
                <Typography fontSize="48px" fontWeight="bold">{title}</Typography>
                <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{
                    '& .MuiBreadcrumbs-ol': {
                        justifyContent: 'center'
                    }
                }}>
                    <StyledLinkTopBorder color="inherit" href={path} fontWeight="bold">
                        {breadcrumbStart}
                    </StyledLinkTopBorder>
                    <StyledLinkTopBorder color="inherit">
                        {breadcrumbNow}
                    </StyledLinkTopBorder>
                </Breadcrumbs>
            </StyledBoxTopBorder>
        </div>
    )
}