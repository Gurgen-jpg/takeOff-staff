import React, {useEffect, useState} from 'react';
import s from "./notes.module.css";
import {useAppDispatch, useAppSelector} from "../../bll/store";
import {Navigate} from "react-router-dom";
import {path} from "../pagesPath";
import {deleteNoteTC, getNoteBookAC, getNotesTC} from "../../bll/noteReducer";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import EditIcon from '@mui/icons-material/Edit';
import {BookType} from "../../bll/noteReducerTypes";
import {BasicModal} from "../../components/modal/Modal";
import {CreateNote} from '../../components/createNote/CreateNote';
import {StyledButton} from "../../components/StyledButton";

export const Notes = () => {
    const dispatch = useAppDispatch()
    const initialized = useAppSelector<boolean>(state => state.app.initialized)
    const name = useAppSelector<string>(state => state.app.user.name)
    const book = useAppSelector<BookType>(state => state.note.notes)

    const [showCreate, setShowCreate] = useState<boolean>(false)

    useEffect(() => {
        initialized && dispatch(getNotesTC())
    }, [])
    useEffect(()=>{
        dispatch(getNoteBookAC(book))
    }, [book])

    const onClickDelete = (id: string | undefined) => {
        id && dispatch(deleteNoteTC(id))
        dispatch(getNotesTC())
    }

    if (!initialized) {
        return <Navigate to={path.LOGIN}/>
    }
    return (
        <>
            <BasicModal open={showCreate}>
                <CreateNote onChange={setShowCreate}/>
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
                                    <EditIcon sx={{marginRight: "10px", marginLeft: "10px", cursor: "pointer"}}/>
                                    <PersonRemoveIcon sx={{color: "red", cursor: "pointer"}}
                                                      onClick={() => onClickDelete(value.id)}/>
                                </div>
                            </div>
                        ))}
                </div>
                <StyledButton title={"Добавить контакт"} onClickHandler={() => setShowCreate(true)}/>
            </div>
        </>
    );
};

