import axios from "axios";
import {RegisterDataRequestType} from "./appAPIType";

const auth = {
    register: `register`,
    login: `login`,
}
const notes = {
    note: `noteBook`
}

const instance = axios.create({
    baseURL: `http://localhost:3001/`,
})

export const appAPI = {
    registration(data: RegisterDataRequestType) {
        return instance
            .post(auth.register, {email:data.email, password: data.password})
            .then((response)=>{
                return response.data
            })
    },
    login() {
        return instance
            .get(auth.login)
            .then((response)=>{
                return response.data
            })
    },
    add(data: string){
        return instance
            .post(notes.note, data)
            .then((response)=> {
                return response.data
            })
    }
}