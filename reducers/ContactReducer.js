import {ADD_CONTACT_INFO} from '../actions/type'

const initialState = {
    ContactName: '',
    ContactNumber: '',
    Contacts: []
}

const contactReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_CONTACT_INFO:
            return Object.assign({}, state, {
                    Contacts: state.Contacts.concat({
                        key: new Date(),
                        ContactName: action.payload.ContactName,
                        ContactNumber: action.payload.ContactNumber,
                    })
            })
        default:
            return state
    }
}


export default contactReducer