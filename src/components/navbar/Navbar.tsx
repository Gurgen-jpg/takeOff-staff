import React from 'react';
import s from './navbar.module.css';
import {StyledButton} from "../StyledButton";
import {useNavigate} from "react-router-dom";
import {path} from "../../pages/pagesPath";
import {AppBar, Box, Toolbar} from "@mui/material";

export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={s.container}>
                    <StyledButton title="Записная книга" onClickHandler={()=>navigate(path.MAIN)}/>
                    <StyledButton title="Регистрация" onClickHandler={()=>navigate(path.REGISTER)}/>
                    <StyledButton title="Войти" onClickHandler={()=>navigate(path.LOGIN)}/>
                </Toolbar>
            </AppBar>
        </Box>

    );
};

