import React, {useState} from 'react';
import s from "../register/register.module.css";
import {ClientForm} from "../../components/clientFotm/ClientForm";
import {Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';


export const Login = () => {

    const navigate = useNavigate()
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onClickConfirm = () => {

    }
    const onClickCancel = () => {

    }

    return (
        <div className={s.container}>
            <h2>Войти</h2>
            <ClientForm name={login}
                        password={password}
                        label1="Имя"
                        label3="Пароль"
                        onChangeName={setLogin}
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
