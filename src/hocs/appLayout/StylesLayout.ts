import {styled} from '@mui/material/styles';
import {Container, Box, Typography, Button} from "@mui/material";

export const StyledHeaderContainer = styled(Container)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 600px)': {
        flexDirection: 'column',
    },
}));

export const StyledHeaderNavbar = styled(Box)(() => ({
    display: 'flex',
    '& > *': {
        margin: '0px 20px',
    },
    '@media (max-width: 570px)': {
        margin: '0px 5px',
    },
}));

export const StyledHeaderNavbarIcons = styled(Box)(() => ({
    display: 'flex',
    '& > *': {
        margin: '0px 10px',
    },
    '@media (max-width:840px)': {
        display: 'none',
    },
}));

export const StyledFooterContainer = styled(Container)(() => ({
    '& .MuiContainer-root': {
        padding: 0,
    },
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    '@media (max-width: 600px)': {
        flexDirection: 'column',
    },

}));

export const StyledFooterBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',


}));

export const StyledFooterBoxTypographyGray = styled(Typography)(() => ({
    color: '#9F9F9F',
    fontSize: '16px',
    marginBottom: '55px',
    '@media (max-width: 800px)': {
        fontSize: '12px',
    },
}));

export const StyledFooterBoxTypography = styled(Typography)(() => ({
    fontSize: '16px',
    marginBottom: '46px',
    fontWeight: 'bold',
    '@media (max-width: 800px)': {
        fontSize: '12px',
    },
}));

export const StyledFooterButton = styled(Button)(() => ({
    color: '#000',
    fontWeight: 'bold',
    fontSize: '14px',
    borderBottom: '1px solid #000',
    marginLeft: '15px',
    '@media (max-width: 800px)': {
        marginLeft: '5px',
    },
}));

