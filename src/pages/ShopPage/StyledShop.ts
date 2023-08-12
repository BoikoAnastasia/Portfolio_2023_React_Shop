import {styled} from "@mui/material/styles";
import {Typography, Box, Button} from "@mui/material";
import {ProductBreadCrumbs} from "../SingleProductPage/components/ProductBreadCrumbs";

export const StyledBoxProduct = styled(Box)(() => ({
    width: '230px',
    margin: '10px 12px 20px 32px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '300px',
    cursor: 'pointer',
}));


export const StyledImageProduct = styled('img')(() => ({
    maxWidth: '100%',
    minHeight: '70%',
    objectFit: 'contain',
}));

export const StyledImageProductInfo = styled('img')(() => ({
    width: '20%',
    height: 'auto',
    objectFit: 'contain',
}));


export const StyledTypographyProduct = styled(Typography)<{ fs: string, color?: string, mr?: string }>
(({fs, color, mr}) => ({
    fontSize: `${fs}px`,
    color: color ? color : '#000',
    marginTop: mr ? mr : '8px',
}));

export const StyledButtonSize = styled(Button)(({}) => ({
    minWidth: '30px',
    width: '30px',
    height: '30px',
    marginRight: '16px',
    color: "#000",
    fontSize: '13px',
    backgroundColor: '#F9F1E7',
    ':hover': {
        color: "#fff",
        backgroundColor: '#b88e2f',
    },
}));

export const StyledButtonChangeColor = styled(Button)<{ bc: string }>(({bc}) => ({
    minWidth: '30px',
    width: '30px',
    height: '30px',
    marginRight: '16px',
    backgroundColor: bc,
    borderRadius: '50%',
    ':hover': {
        backgroundColor: bc,
    }
}));

export const StyledButtonChangeCount = styled(Button)(() => ({
    width: '123px',
    height: '64px',
    borderRadius: '10px',
    border: '1px solid #9F9F9F',
}));

export const StyledButtonsAdditional = styled(Button)(() => ({
    width: '215px',
    height: '64px',
    fontSize: '20px',
    color: '#000',
    border: '1px solid #000',
    borderRadius: '15px',
    textTransform: 'none',
    marginLeft: '10px',
}));

export const StyledTypographyAdditionalInfo = styled(Typography)
(() => ({
    fontSize: `16px`,
    color: '#9F9F9F',
    marginBottom: '12px',
}));

export const StyledTypographyDescription = styled(Typography)
(() => ({
    fontSize: `24px`,
    color: '#9F9F9F',
    margin: '0 22px',
}));

export const StyledBoxBreadCrumbsProduct = styled(Box)(() => ({
    padding: '40px 0',
    height: '50px',
    backgroundColor: '#F9F1E7',
}));






