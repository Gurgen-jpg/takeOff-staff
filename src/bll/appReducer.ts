import {AppActionType, appStatus, InitialStateType} from "./appReducerTypes";
import {LoginRequestType, RegisterDataRequestType} from "../dal/appAPIType";
import {AppThunk} from "./store";
import {appAPI} from "../dal/api";



export const initialState: InitialStateType = {
    initialized: false,
    status: appStatus.idle,
    error: null,
    user: {
        name: '',
        email: '',
        token: '',
        id: '',
    },
}

export const appReducer = (state = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "APP/INITIALIZE-APP": {
            return {...state, initialized: action.isInit}
        }
        case "APP/STATUS": {  //записать статус запроса
            return {...state, status: action.status}
        }
        case "APP/SET-ERROR": { //записать ошибку при запросе и выдать в Бар
            return {...state, error: action.error}
        }
        case "APP/SET-NAME": {
            return {...state, user: {...state.user, name: action.login}}
        }
        case "APP/SET-EMAIl": {
            return {...state, user: {...state.user, email: action.email}}
        }
        case "APP/SET-TOKEN": {
            return {...state, user: {...state.user, token: action.token}}
        }
        case "APP/SET-ID": {
            return {...state, user: {...state.user, id: action.id}}
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
export const setNameAC = (login: string) => ({
    type: 'APP/SET-NAME',
    login
} as const)
export const setEmailAC = (email: string) => ({
    type: 'APP/SET-EMAIl',
    email
} as const)
export const setTokenAC = (token: string) => ({
    type: 'APP/SET-TOKEN',
    token
} as const)
export const setIdAC = (id: string) => ({
    type: 'APP/SET-ID',
    id
} as const)

export const registrationTC = (data: RegisterDataRequestType): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(appStatusAC(appStatus.loading))
            const response = await appAPI.registration(data)
            console.log(response)
            dispatch(setNameAC(response.user.login))
            dispatch(setEmailAC(response.user.email))
            dispatch(setIdAC(response.user.id))
            dispatch(setTokenAC(response.accessToken))
            dispatch(initializeAC(true))
            dispatch(setAppErrorAC(null))
            dispatch(appStatusAC(appStatus.success))
        } catch (error: any) {
            console.log('REGISTRATION ERROR -> ', error)
            dispatch(setAppErrorAC(error.response.data))
            dispatch(appStatusAC(appStatus.failed))
        } finally {
            dispatch(appStatusAC(appStatus.idle))
        }
    }
}
export const loginTC = (data: LoginRequestType): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(appStatusAC(appStatus.loading))
            const response = await appAPI.login(data)
            dispatch(setNameAC(response.user.login))
            dispatch(setEmailAC(response.user.email))
            dispatch(setIdAC(response.user.id))
            dispatch(initializeAC(true))
            dispatch(setAppErrorAC(null))
            dispatch(appStatusAC(appStatus.success))
        } catch (error: any) {
            console.log('REGISTRATION ERROR -> ', error)
            dispatch(setAppErrorAC(error.response.data))
            dispatch(appStatusAC(appStatus.failed))
        } finally {
            dispatch(appStatusAC(appStatus.idle))
        }
    }

}

