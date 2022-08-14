import React from 'react';
import s from './navbar.module.css';
import {StyledButton} from "../StyledButton";
import {useNavigate} from "react-router-dom";
import {path} from "../../pages/pagesPath";
import {AppBar, Box, Toolbar} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../bll/store";
import {initializeAC} from "../../bll/appReducer";

export const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const initialized = useAppSelector(state => state.app.initialized)
    const clickNoteBook = () => {
        navigate(path.MAIN)
    }
    const clickEnter = () => {
        navigate(path.LOGIN)
    }
    const clickExit = () => {
        dispatch(initializeAC(false))
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={s.container}>
                    <StyledButton title="Записная книга" onClickHandler={clickNoteBook}/>
                    <StyledButton title={initialized ? "Выйти" : "Войти"}
                                  onClickHandler={initialized ? clickExit : clickEnter}/>
                </Toolbar>
            </AppBar>
        </Box>

    );
};

