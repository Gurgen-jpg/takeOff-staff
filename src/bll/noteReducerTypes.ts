import {addNoteAC, getNoteBookAC} from "./noteReducer";

export type NoteInitialStateType = {
    notes: BookType
}


export type addNoteACType = ReturnType<typeof addNoteAC>
export type getNoteBookACType = ReturnType<typeof getNoteBookAC>
export type NoteActionType = addNoteACType
    | getNoteBookACType

export type NoteType = {
    id: string
    isActive?: boolean
    age?: number,
    name: string,
    gender?: string,
    email?: string,
    phone: string,
    about?: string
    registered?: string
}
export type BookType = NoteType[]