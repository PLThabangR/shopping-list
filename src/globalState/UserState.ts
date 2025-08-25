import type { User } from "../types/userTypes"
import { useReducer } from "react"


interface UserAction {
    type: string
    payload: {
        id?: number
        email: string
        password: string
        name: string
        surname: string
        cellNumber: number
    }
}


const initialState: User = {
    id: undefined,
    email: '',
    password: '',
    name: '',
    surname: '',
    cellNumber: 0
}

//Create our state and actions
export const  useUser=()=>{

    const [state, dispatch] = useReducer(userReducer, initialState)

    return {state, dispatch}
}

export const userReducer = (state: User, action: UserAction) => {
    switch (action.type) {
        case 'CreateUser':
            
            return action.payload
        default:
            return state
    }
}