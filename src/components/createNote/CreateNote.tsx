import React, {useState} from 'react';
import s from './createNote.module.css';
import {FormItem} from "./FormItem";
import {StyledButton} from "../StyledButton";
import {useAppDispatch} from "../../bll/store";
import {addNotesTC} from "../../bll/noteReducer";

type CreateNotePropsType = {
    onChange: (showCreate: boolean) => void
}

export const CreateNote: React.FC<CreateNotePropsType> = ({onChange}) => {
    const dispatch = useAppDispatch()
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [age, setAge] = useState<string>('')
    const [about, setAbout] = useState<string>('')

    const onClickSave = () => {
        dispatch(addNotesTC({name, phone, age, email, about}))
        onChange(false)
    }

    return (
        <div className={s.container}>
            <FormItem value={name} onChange={setName} title={"Имя"}/>
            <FormItem value={phone} onChange={setPhone} title={"Телефон"}/>
            <FormItem value={email} onChange={setEmail} title={"Почта"}/>
            <FormItem value={age} onChange={setAge} title={"Возраст"}/>
            <FormItem value={about} onChange={setAbout} title={"Инфо"}/>
            <div className={s.buttonBlock}>
                <StyledButton title={"Отмена"}
                              error
                              onClickHandler={() => onChange(false)}/>
                <StyledButton title={"Сохранить"}
                              onClickHandler={onClickSave}/>
            </div>
        </div>
    );
};

