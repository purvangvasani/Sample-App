import {AUTH_ADD_USER} from './type'
import {AUTH_UPDATE_USER} from './type'

export const authAddUser = (id, FullName, Email, Password, isLogged) => {
    return {
        type: AUTH_ADD_USER,
        payload: {id, FullName, Email, Password, isLogged}
    }
}
export const authUpdateUser = (id, FullName, Email, Password, isLogged) => {
    return {
        type: AUTH_UPDATE_USER,
        payload: {id, FullName, Email, Password, isLogged}
    }
}
