import React, {useState} from 'react';
import s from "../register/register.module.css";
import {ClientForm} from "../../components/clientFotm/ClientForm";
import {Button} from "@mui/material";
import {Navigate, useNavigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../bll/store";
import {path} from "../pagesPath";
import {loginTC} from "../../bll/appReducer";


export const Login = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const initialized = useAppSelector(state => state.app.initialized)
    const onClickConfirm = () => {
        dispatch(loginTC({email, password}))
    }
    const onClickCancel = () => {
        setEmail('')
        setPassword('')
    }
    if (initialized) {
        return <Navigate to={path.MAIN}/>
    }

    return (
        <div className={s.container}>
            <h2>Войти</h2>
            <ClientForm email={email}
                        password={password}
                        label2="Почта"
                        label3="Пароль"
                        onChangeEmail={setEmail}
                        onChangePassword={setPassword}
                        onClickConfirm={onClickConfirm}
                        onClickCancel={onClickCancel}
            />
            <span>Нет аккаунта?</span>
            <Button
                size="small"
                onClick={()=>navigate('/register', {replace: true})}
            >Регистрация</Button>
        </div>
    );
};
