import React, {useState} from 'react';
import s from './createNote.module.css';
import {FormItem} from "./FormItem";
import {StyledButton} from "../StyledButton";
import {useAppDispatch} from "../../bll/store";
import {addNotesTC, editNoteTC} from "../../bll/noteReducer";
import { NoteType } from '../../types/noteReducerTypes';


type CreateNotePropsType = {
    onChange: (showCreate: boolean) => void
    setEditMod: (editMod: boolean) => void
    editMod: boolean
    editObj: NoteType
    setEditObj: (editObj: NoteType) => void
}

export const CreateNote: React.FC<CreateNotePropsType> = ({
                                                              onChange, editObj,
                                                              setEditMod, editMod,
                                                              setEditObj
                                                          }) => {
    const dispatch = useAppDispatch()
    let {id, name, phone, email, age, about} = editObj
    const [newName, setName] = useState<string>(name)
    const [newPhone, setPhone] = useState<string>(phone)
    const [newEmail, setEmail] = useState<string | undefined>(email)
    const [newAge, setAge] = useState<string | undefined>(age)
    const [newAbout, setAbout] = useState<string | undefined>(about)

    const onClickSave = () => { //Функция сохранения контакта
        dispatch(addNotesTC({name: newName,
            age: newAge, about: newAbout, email: newEmail, phone: newPhone}))
        onChange(false)
    }
    const onClickEdit = () => {
        id && dispatch(editNoteTC(id, {
            id, name: newName,
            age: newAge, about: newAbout, email: newEmail, phone: newPhone
        }))
        setEditObj({name: '', phone: '', email: '', age: '', about: ''})
        onChange(false)
    }
    const onClickCancel = () => {
        setEditObj({name: '', phone: '', email: '', age: '', about: ''})
        onChange(false)
        setEditMod(false)
    }

    return (
        <div className={s.container}>
            <FormItem value={newName} onChange={setName} title={"Имя"}/>
            <FormItem value={newPhone} onChange={setPhone} title={"Телефон"}/>
            <FormItem value={newEmail ? newEmail : ''} onChange={setEmail} title={"Почта"}/>
            <FormItem value={newAge ? newAge : ''} onChange={setAge} title={"Возраст"}/>
            <FormItem value={newAbout ? newAbout : ''} onChange={setAbout} title={"Инфо"}/>
            <div className={s.buttonBlock}>
                <StyledButton title={"Отмена"}
                              error
                              onClickHandler={onClickCancel}/>
                <StyledButton title={"Сохранить"}
                              onClickHandler={
                                  editMod
                                      ? onClickEdit
                                      : onClickSave
                              }/>
            </div>
        </div>
    );
};

