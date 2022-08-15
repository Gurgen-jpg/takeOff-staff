import axios, {AxiosResponse} from "axios";
import {AddNoteRequestType, LoginRequestType, RegisterDataRequestType, RegisterResponseType} from "./appAPIType";
import {BookType} from "../bll/noteReducerTypes";

const auth = {
    register: `register`,
    login: `login`,
}
const notes = {
    user: `users`,
    note: `noteBook`
}

const instance = axios.create({
    baseURL: `http://localhost:3001/`,
})

export const appAPI = {
    registration(data: RegisterDataRequestType) {
        return instance
            .post(auth.register, {login: data.login, email: data.email, password: data.password})
            .then((response: AxiosResponse<RegisterResponseType>) => {
                return response.data
            })
    },
    login(data: LoginRequestType) {
        return instance
            .post(auth.login, {email: data.email, password: data.password})
            .then((response:AxiosResponse<RegisterResponseType>) => {
                return response.data
            })
    },
    getBook(){
      return instance
          .get(notes.note)
          .then((response: AxiosResponse<BookType>)=>{
              return response.data
          })
    },
    add(data: AddNoteRequestType<undefined>) {
        return instance
            .post(notes.note, data)
            .then((response: AxiosResponse<AddNoteRequestType<string>>) => {
                return response.data
            })
    },
    deleteNote(id: string) {
        return instance
            .delete(notes.note + `/${id}`)

            .then((response: AxiosResponse<BookType>)=>{
                return response.data
            })
    }
}