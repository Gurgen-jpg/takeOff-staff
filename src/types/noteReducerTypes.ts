import {addNoteAC, deleteNoteAC, getNoteBookAC} from "../bll/noteReducer";

export type NoteInitialStateType = {
    notes: BookType
}


export type addNoteACType = ReturnType<typeof addNoteAC>
export type getNoteBookACType = ReturnType<typeof getNoteBookAC>
export type deleteNoteACType = ReturnType<typeof deleteNoteAC>
export type NoteActionType = addNoteACType
    | getNoteBookACType
    | deleteNoteACType

export type NoteType = {
    id?: string
    isActive?: boolean
    age?: string,
    name: string,
    gender?: string,
    email?: string,
    phone: string,
    about?: string
    registered?: string
}
export type BookType = NoteType[]