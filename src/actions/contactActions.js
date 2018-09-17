import { GET_CONTACT , DELETE_CONTACT } from './types'


export const getProfile = () => {
    const action = { type : GET_CONTACT}
    return action
}

export const deleteContact = id => {
    const action = { type : DELETE_CONTACT , payload : id}
    return action

}