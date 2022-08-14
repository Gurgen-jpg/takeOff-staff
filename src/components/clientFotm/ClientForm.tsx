import React from 'react';
import s from './clientForm.module.css';
import Input from "../Input";
import {StyledButton} from "../StyledButton";


type PropsType = {
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
    label1?: string
    label2?: string
    label3?: string
    label4?: string
    onChangeName?: (name: string) => void
    onChangeEmail?: (email: string) => void
    onChangePassword?: (password: string) => void
    onChangeConfirmPassword?: (confirmPassword: string) => void
    onClickConfirm: () => void
    onClickCancel?: () => void
    isRegister?: boolean
}

export const ClientForm: React.FC<PropsType> = ({
                                                    name, password, label1,
                                                    label2, label3,
                                                    label4, onChangeName,
                                                    onChangePassword, onClickConfirm,
                                                    onClickCancel, isRegister,
                                                    email, onChangeEmail,
                                                    confirmPassword, onChangeConfirmPassword
                                                }) => {
    return (
        <div className={s.container}>
            {isRegister && <Input value={name}
                    onChange={onChangeName}
                    label={label1}/>}
                <Input value={email}
                       onChange={onChangeEmail}
                       label={label2}
                       type="email"
                />
            <Input value={password}
                   onChange={onChangePassword}
                   label={label3}
                   type="password"
            />
            {
                isRegister &&
                <Input value={confirmPassword}
                       onChange={onChangeConfirmPassword}
                       label={label4}
                       type="password"
                />
            }
            <StyledButton title="Подтвердить"
                          onClickHandler={onClickConfirm}
            />
            <StyledButton title="Отмена"
                          onClickHandler={onClickCancel}
            />

        </div>
    );
};

