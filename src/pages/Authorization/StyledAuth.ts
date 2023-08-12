import {styled} from "@mui/material/styles";
import {Box, Button, Input, Typography} from "@mui/material";

export const StyledBoxAuth = styled(Box)(() => ({
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#F9F1E7',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '30px 200px',
    borderRadius: '20px',
    '& > *': {
        margin: '10px 0',
    }
}));

export const StyledButtonAuthTitle = styled(Button)(() => ({
    textTransform: 'none',
    color: '#000',
    fontSize: "24px",
    ':hover': {
        backgroundColor: 'none',
    }
}));

export const StyledButtonAuth = styled(Button)(() => ({
    textTransform: 'none',
    color: '#fff',
    backgroundColor: '#b88e2f',
    padding: '10px 30px',
    borderRadius: '30px',
    marginTop: '30px',
    ':hover': {
        backgroundColor: '#966e17',
    }
}));

