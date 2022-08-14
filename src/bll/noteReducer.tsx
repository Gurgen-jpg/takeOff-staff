import {BookType, NoteActionType, NoteInitialStateType, NoteType} from "./noteReducerTypes";
import {AppThunk} from "./store";
import {appAPI} from "../dal/api";
import {appStatusAC, setAppErrorAC} from "./appReducer";
import {appStatus} from "./appReducerTypes";

export const initialState = {
    notes: [] as BookType
}

export const noteReducer = (state: NoteInitialStateType = initialState, action: NoteActionType): NoteInitialStateType => {
    switch (action.type) {
        case "NOTE/GET-BOOK": {
            return {...state, notes: action.book}
        }
        case "NOTE/ADD-NOTE": {
            return {...state, notes: [...state.notes, {...action.payload.note}]}
        }
        default:
            return {...state}

    }
}
export const addNoteAC = (payload: { note: NoteType }) => ({
    type: 'NOTE/ADD-NOTE',
    payload
} as const)
export const getNoteBookAC = (book: BookType) => ({
    type: 'NOTE/GET-BOOK',
    book
} as const)

export const getNotesTC = (): AppThunk => {
  return async (dispatch) =>{
      try {
          dispatch(appStatusAC(appStatus.loading))
          const response = await appAPI.getBook()
          dispatch(getNoteBookAC(response))
          dispatch(appStatusAC(appStatus.success))

      } catch (error: any) {
          dispatch(setAppErrorAC(error.response.data))
          dispatch(appStatusAC(appStatus.failed))
      } finally {
          dispatch(appStatusAC(appStatus.idle))
      }
  }
}