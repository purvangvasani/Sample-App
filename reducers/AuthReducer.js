import {AUTH_ADD_USER} from '../actions/type'

const initialState = {
    isLogged: '',
    FullName: 'Purvang',
    Email: 'root@root.com',
    Password: 'root1',
}

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case AUTH_ADD_USER:
            return Object.assign({}, state, {
                    FullName: action.payload.FullName,
                    Email: action.payload.Email,
                    Password: action.payload.Password,
                    isLogged: action.payload.isLogged
            })
        default:
            return state
    }
}


export default authReducer