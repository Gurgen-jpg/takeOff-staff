import React, {useCallback, useEffect, useState} from 'react';
import s from "./notes.module.css";
import {useAppDispatch, useAppSelector} from "../../bll/store";
import {Navigate} from "react-router-dom";
import {path} from "../pagesPath";
import {deleteNoteTC, getNoteBookAC, getNotesTC} from "../../bll/noteReducer";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import EditIcon from '@mui/icons-material/Edit';

import {BasicModal} from "../../components/modal/Modal";
import {CreateNote} from '../../components/createNote/CreateNote';
import {StyledButton} from "../../components/StyledButton";
import {BookType, NoteType} from "../../types/noteReducerTypes";

export const Notes = () => {
    const dispatch = useAppDispatch()
    const initialized = useAppSelector<boolean>(state => state.app.initialized)
    const name = useAppSelector<string>(state => state.app.user.name)
    const book = useAppSelector<BookType>(state => state.note.notes)

    const [showCreate, setShowCreate] = useState<boolean>(false)
    const [editMod, setEditMod] = useState<boolean>(false)
    const [editObj, setEditObj] = useState<NoteType>({name: '', phone: '', email: '', age: '', about: ''})

    useEffect(() => {
        initialized && dispatch(getNotesTC())
    }, [dispatch, initialized])
    useEffect(() => {
        dispatch(getNoteBookAC(book))
    }, [dispatch,book])

    const onClickDelete = (id: string | undefined) => {
        id && dispatch(deleteNoteTC(id))
    }
    const onClickEdit = useCallback((value: NoteType) => {
        setEditObj(value)
        setEditMod(true)
        setShowCreate(true)
    }, [])

    if (!initialized) {
        return <Navigate to={path.LOGIN}/>
    }
    return (
        <>
            <BasicModal open={showCreate}>
                <CreateNote onChange={setShowCreate}
                            setEditMod={setEditMod}
                            editMod={editMod}
                            editObj={editObj}
                            setEditObj={setEditObj}
                />
            </BasicModal>
            <div className={s.container}>
                <h2>{`${name} ваша записная книга`}</h2>
                <div style={{width: '100%', maxWidth: 600}}>
                    {
                        book && book.map((value, id) => (
                            <div key={id} className={s.item}>
                                <div className={s.textBlock}>
                                    <span>{value.name} : </span>
                                    <span>{value.phone}</span>
                                </div>
                                <div className={s.iconBlock}>
                                    <EditIcon sx={{marginRight: "10px", marginLeft: "10px", cursor: "pointer"}}
                                              onClick={() => onClickEdit(value)}
                                    />
                                    <PersonRemoveIcon sx={{color: "red", cursor: "pointer"}}
                                                      onClick={() => onClickDelete(value.id)}
                                    />
                                </div>
                            </div>
                        ))}
                </div>
                <StyledButton title={"Добавить контакт"} onClickHandler={() => setShowCreate(true)}/>
            </div>
        </>
    );
};

