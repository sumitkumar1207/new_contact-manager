<<<<<<< HEAD
import { GET_CONTACT, DELETE_CONTACT } from "./types";

export const getProfile = () => {
  const action = { type: GET_CONTACT };
  return action;
};

export const deleteContact = id => {
  const action = { type: DELETE_CONTACT, payload: id };
  return action;
};
=======
import { GET_CONTACT , DELETE_CONTACT } from './types'


export const getProfile = () => {
    const action = { type : GET_CONTACT}
    return action
}

export const deleteContact = id => {
    const action = { type : DELETE_CONTACT , payload : id}
    return action

}
>>>>>>> 40953f78b0b3da832cd1ab92970738947be5a65e
