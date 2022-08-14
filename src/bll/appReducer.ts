import {AppActionType, appStatus, InitialStateType} from "./appReducerTypes";
import {RegisterDataRequestType} from "../dal/appAPIType";
import {AppThunk} from "./store";
import {appAPI} from "../dal/api";


export const initialState: InitialStateType = {
    initialized: false,
    status: appStatus.idle,
    error: null
}


export const appReducer = (state = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "APP/INITIALIZE-APP": {
            return {...state, initialized: action.isInit}
        }
        case "APP/STATUS": {
            return {...state, status: action.status}
        }
        case "APP/SET-ERROR": {
            return {...state, error: action.error}
        }
        default:
            return {...state}

    }
}
export const initializeAC = (isInit: boolean) => ({
    type: 'APP/INITIALIZE-APP',
    isInit
} as const)
export const appStatusAC = (status: appStatus) => ({
    type: 'APP/STATUS',
    status
} as const)
export const setAppErrorAC = (error: string | null) => ({
    type: "APP/SET-ERROR",
    error
} as const)

export const registrationTC = (data: RegisterDataRequestType): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(appStatusAC(appStatus.loading))
            const response = await appAPI.registration(data)
            console.log('регистрация',response)
            dispatch(appStatusAC(appStatus.success))
        } catch (e) {
            console.log('REGISTRATION ERROR -> ', e)
            setAppErrorAC(String(e))
            dispatch(appStatusAC(appStatus.failed))
        } finally {
            dispatch(appStatusAC(appStatus.idle))
        }
    }
}

