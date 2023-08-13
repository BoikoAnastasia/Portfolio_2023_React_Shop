// react
import React, {FC} from "react";

//hocs
import appLayout from "../../hocs/appLayout";

//images
import HomeTopImage from '../../images/HomeTopImage.png';
import HomeRangeLeft from '../../images/RangeImage1.png';
import HomeRangeCenter from '../../images/RangeImage2.png';
import HomeRangeRight from '../../images/RangeImage3.png';

//mui
import {
    StyledBox, StyledBoxRange,
    StyledButtonYellow,
    StyledImage,
    StyledTypographySubtitle, StyledTypographyTitle,
    StyledTypographyYellow
} from "./StyledMainPage";
import {Box, Typography} from "@mui/material";

//components
import {SliceProducts} from "../../components/SliceProducts/SliceProducts";

export const MainPage: FC = appLayout((): JSX.Element => {


    const rangeBox = (image: any, nameImage: string) => {
        return (
            <StyledBoxRange>
                <StyledImage src={image}/>
                <Typography marginTop="30px" fontSize="24px">{nameImage}</Typography>
            </StyledBoxRange>
        )
    }

    return (
        <>
            <div style={{position: 'relative'}}>
                <StyledImage src={HomeTopImage}/>
                <StyledBox>
                    <Typography fontSize="16px" color="#333">New Arrival</Typography>
                    <StyledTypographyYellow>Discover Our <br/> New Collection</StyledTypographyYellow>
                    <Typography fontSize="18px">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Ut elit tellus, luctus
                        nec ullamcorper mattis.</Typography>
                    <StyledButtonYellow>BUY Now</StyledButtonYellow>
                </StyledBox>
            </div>
            <StyledTypographyTitle fs='32'>Browse The Range</StyledTypographyTitle>
            <StyledTypographySubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</StyledTypographySubtitle>
            <Box
                display="flex"
                justifyContent="center"
                margin="0 auto"

            >
                {rangeBox(HomeRangeLeft, 'Diving')}
                {rangeBox(HomeRangeCenter, 'Living')}
                {rangeBox(HomeRangeRight, 'Bedroom')}
            </Box>
            <StyledTypographyTitle fs='40'>Our Products</StyledTypographyTitle>
            <SliceProducts sliceFrom={0} sliceTo={4}/>
        </>
    )
});