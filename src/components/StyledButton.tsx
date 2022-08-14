import React from 'react';
import {Button, createTheme, Theme} from "@mui/material";



type PropsType = {
    error?: boolean
    title: string
    onClickHandler?: () => void
}
const theme: Theme = createTheme({
    palette: {
        primary: {
            main: '#6c93de',
        },

    },
});

export const StyledButton: React.FC<PropsType> = ({error, title, onClickHandler}) => {
    return (
        <Button variant="contained"
                color={error ? "error" : "primary"}
                onClick={onClickHandler}
        >
            {title}
        </Button>
    );
};

