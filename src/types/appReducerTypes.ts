import {appStatusAC, initializeAC, setAppErrorAC, setEmailAC, setIdAC, setNameAC, setTokenAC} from "../bll/appReducer";

export enum appStatus {
    loading = "loading",
    success = "success",
    failed = "failed",
    idle = "idle"
}

export type initializeACType = ReturnType<typeof initializeAC>
export type appStatusACType = ReturnType<typeof appStatusAC>
export type setAppErrorACType = ReturnType<typeof setAppErrorAC>
export type setNameACType = ReturnType<typeof setNameAC>
export type setEmailACType = ReturnType<typeof setEmailAC>
export type setTokenACType = ReturnType<typeof setTokenAC>
export type setIdACType = ReturnType<typeof setIdAC>
export type AppActionType = initializeACType
    | appStatusACType
    | setAppErrorACType
    | setNameACType
    | setEmailACType
    | setTokenACType
    | setIdACType

export type InitialStateType = {
    initialized: boolean
    status: appStatus
    error: string | null
    user: {
        name: string
        email: string
        token: string
        id: string
    }
}