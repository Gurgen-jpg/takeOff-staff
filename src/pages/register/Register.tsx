import React, {useState} from 'react';
import s from './register.module.css'
import {ClientForm} from "../../components/clientFotm/ClientForm";
import {useAppDispatch, useAppSelector} from "../../bll/store";
import {registrationTC} from "../../bll/appReducer";
import {Navigate} from "react-router-dom";
import {path} from "../pagesPath";



export const Register = () => {
    const dispatch = useAppDispatch()
    const [login, setLogin] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [confirm, setConfirm] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const initialized = useAppSelector(state => state.app.initialized)
    const onClickConfirm = () => {
        dispatch(registrationTC({login, email, password}))
    }


    if (initialized) {
        return <Navigate to={path.MAIN}/>
    }

    return (
        <div className={s.container}>
            <h2>Регистрация</h2>
            <ClientForm name={login}
                        password={password}
                        email={email}
                        confirmPassword={confirm}
                        label1="Имя"
                        label2="Почта"
                        label3="Пароль"
                        label4="Повторите пароль"
                        onChangeName={setLogin}
                        onChangePassword={setPassword}
                        onChangeEmail={setEmail}
                        onChangeConfirmPassword={setConfirm}
                        onClickConfirm={onClickConfirm}
                        isRegister={true}
            />
        </div>
    );
};

