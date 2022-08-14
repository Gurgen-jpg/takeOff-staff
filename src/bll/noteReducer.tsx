import {NoteActionType, NoteInitialStateType, NoteItemsType} from "./noteReducerTypes";

export const initialState = {
    notes: [] as NoteItemsType[]
}

export const noteReducer = (state: NoteInitialStateType = initialState, action: NoteActionType): NoteInitialStateType => {
switch (action.type) {
    case "NOTE/ADD-NOTE": {
        return {...state, notes:[...state.notes, {name: action.payload.name, phone: action.payload.phone}]}
    }
    default: return {...state}

}
}
export const addNoteAC = (payload: { name: string, phone: string }) => ({
    type: 'NOTE/ADD-NOTE',
    payload
} as const)