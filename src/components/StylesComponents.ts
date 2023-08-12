import {styled} from "@mui/material/styles";
import {Box, Button, Link, Typography} from "@mui/material";
import {keyframes} from "@emotion/react";

export const StyledImage = styled('img')(() => ({
    width: '100%',
    height: 'auto',
    display: 'block',
}));

export const StyledBoxTopBorder = styled(Box)(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
}));

export const StyledLinkTopBorder = styled(Link)(() => ({
    fontSize: '16px',
    textDecoration: 'none',
    color: '#000',
}));

const myEffectExit = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-200%);
  }
`;

const Rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }`;

export const StyledloadingCircle = styled(Typography)(() => ({
    width: '60px',
    height: '60px',
    display: 'block',
    borderRadius: '50%',
    border: '3px dashed blue',
    margin: '0 auto',
    animation: `${Rotate} 2.0s infinite linear`,
}))


export const ButtonShowMore = styled(Button)(() => ({
    width: '245px',
    height: '48px',
    border: '1px solid #b88e2f',
    backgroundColor: '#fff',
    textAlign: 'center',
    color: "#b88e2f",
    marginBottom: '5%',
    ":hover": {
        backgroundColor: "#b88e2f",
        color: '#fff',
    }
}));