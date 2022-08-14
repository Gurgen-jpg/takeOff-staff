import {appStatusAC, initializeAC, setAppErrorAC} from "./appReducer";

export enum appStatus {
    loading = "loading",
    success = "success",
    failed = "failed",
    idle = "idle"
}

export type initializeACType = ReturnType<typeof initializeAC>
export type appStatusACType = ReturnType<typeof appStatusAC>
export type setAppErrorACType = ReturnType<typeof setAppErrorAC>
export type AppActionType = initializeACType
    | appStatusACType
    | setAppErrorACType

export type InitialStateType = {
    initialized: boolean
    status: appStatus
    error: string | null
}