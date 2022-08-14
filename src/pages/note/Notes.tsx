import React, {useEffect} from 'react';
import s from "./notes.module.css";
import {useAppDispatch, useAppSelector} from "../../bll/store";
import {Navigate} from "react-router-dom";
import {path} from "../pagesPath";
import {getNotesTC} from "../../bll/noteReducer";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import EditIcon from '@mui/icons-material/Edit';
import {BookType} from "../../bll/noteReducerTypes";

export const Notes = () => {
    const dispatch = useAppDispatch()
    const initialized = useAppSelector<boolean>(state => state.app.initialized)
    const name = useAppSelector<string>(state => state.app.user.name)
    const book = useAppSelector<BookType>(state => state.note.notes)

    useEffect(() => {
        initialized && dispatch(getNotesTC())
    }, [])


    if (!initialized) {
        return <Navigate to={path.LOGIN}/>
    }
    return (
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
                                <PersonRemoveIcon sx={{color: "red", cursor: "pointer"}}/>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

