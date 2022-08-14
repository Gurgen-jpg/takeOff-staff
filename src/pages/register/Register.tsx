import React, {useState} from 'react';
import s from './register.module.css'
import {ClientForm} from "../../components/clientFotm/ClientForm";
import {useAppDispatch} from "../../bll/store";
import {registrationTC} from "../../bll/appReducer";
import {appAPI} from "../../dal/api";



export const Register = () => {
    const dispatch = useAppDispatch()
    const [login, setLogin] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [confirm, setConfirm] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onClickConfirm = () => {
    dispatch(registrationTC({email, password}))
    }
    const onClickCancel = () => {
        appAPI.add("Hello world")
    }

    console.log(login)
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
                        onClickCancel={onClickCancel}
                        isRegister={true}
            />
        </div>
    );
};

