import {ADD_CONTACT_INFO} from './type'

export const addContactInfo = (ContactName, ContactNumber) => {
    return {
        type: ADD_CONTACT_INFO,
        payload: {ContactName, ContactNumber}
    }
}
