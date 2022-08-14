import {Action, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appReducer} from "./appReducer";
import { noteReducer } from "./noteReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";



export const rootReducer = combineReducers({
    app: appReducer,
    note: noteReducer
})

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppStateType, unknown, Action<string>>>()
export type AppThunk<T = void> = ThunkAction<T, AppStateType, unknown, Action<string>>

export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore для проверки состояния через консоль
window.store = store;