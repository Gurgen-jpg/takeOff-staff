export type RegisterDataRequestType = {
    login: string
    email: string
    password: string
}
export type LoginDataRequestType = {
    email: string
    password: string
}
export type LoginRequestType = {
    email: string
    password: string
}
export type RegisterResponseType = {
    accessToken: string
    user: {
        id: string
        login: string
        email: string
    }
}
export type AddNoteRequestType<T> = {
    id?:T
    name: string
    phone: string
    email?: string
    age?: string
    about?: string
}


