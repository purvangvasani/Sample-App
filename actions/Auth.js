import {AUTH_ADD_USER} from './type'

export const authAddUser = (FullName, Email, Password, isLogged) => {
    return {
        type: AUTH_ADD_USER,
        payload: {FullName, Email, Password, isLogged}
    }
}
