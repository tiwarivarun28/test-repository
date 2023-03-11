import { TODO } from "./ActionTypes"
export const todoAction=(data)=>{
    return{
        type:TODO,
        payload:data

    }
}