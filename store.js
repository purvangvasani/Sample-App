import {combineReducers, createStore} from 'redux'
import AuthReducer from './reducers/AuthReducer'
import ContactReducer from './reducers/ContactReducer'

const rootReducer = combineReducers({
    auth: AuthReducer,
    contact: ContactReducer
})

const configureStore = () =>{
    return createStore(rootReducer)
}

export default configureStore