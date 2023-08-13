import {styled} from '@mui/material/styles';
import {Box, Button, Typography} from "@mui/material";
import {strict} from "assert";

export const StyledImage = styled('img')(() => ({
    width: '100%',
    height: 'auto',
    display: 'block',
}));

export const StyledBox = styled(Box)(() => ({
    maxWidth: '480px',
    padding: '62px 40px 37px 39px',
    position: 'absolute',
    top: '28%',
    right: 0,
    zIndex: 2,
    backgroundColor: '#FFF3E3',
}));

export const StyledTypographyYellow = styled(Typography)(() => ({
    fontSize: '52px',
    color: '#B88E2F',
    fontWeight: 'bold',
}));

export const StyledButtonYellow = styled(Button)(() => ({
    fontSize: '16px',
    backgroundColor: '#B88E2F',
    color: '#fff',
    textTransform: 'uppercase',
    padding: '25px 72px',
    textAlign: 'center',
    marginTop: '46px',
    ':hover': {
        backgroundColor: '#876518',
    },
}));

export const StyledTypographyTitle = styled(Typography)<{ fs: string }>(({fs}) => ({
    fontSize: `${fs}px`,
    color: '#333333',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '57px 0 5px 0',
}));

export const StyledTypographySubtitle = styled(Typography)(() => ({
    fontSize: '20px',
    color: '#666666',
    textAlign: 'center',
    marginBottom: '62px',
}));

export const StyledBoxRange = styled(Box)(() => ({
    margin: '0px 10px',
    textAlign: 'center'
}));