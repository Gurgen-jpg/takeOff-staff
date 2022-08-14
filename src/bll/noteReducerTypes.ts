import {addNoteAC} from "./noteReducer";

export type NoteInitialStateType = {
    notes: NoteItemsCollectionType
}

export type NoteItemsType = {
    name: string
    phone: string
}
export type NoteItemsCollectionType = NoteItemsType[]

export type addNoteACType = ReturnType<typeof addNoteAC>
export type NoteActionType = addNoteACType
