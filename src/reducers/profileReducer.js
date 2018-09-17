import { GET_CONTACT , DELETE_CONTACT } from '../actions/types'

const initialState = {
    profiles : [
        {
          id : 100,
          name : 'aa',
          email : 'aa@gmail.com',
          phone : '123123123'
        },
        {
            id : 101,
          name : 'bb',
          email : 'bb@gmail.com',
          phone : '1234543656'
        },
        {
            id : 102,
          name : 'cc',
          email : 'cc@gmail.com',
          phone : '9567895786978'
        },
        {
            id : 103,
          name : 'dd',
          email : 'dd@gmail.com',
          phone : '76324634950646'
        }
      ]
}


export default function(state = initialState , action ){
    switch(action.type){
        case GET_CONTACT:
            return {
                ...state,
                profiles : state.profiles
            }

        case DELETE_CONTACT:
            return {
                ...state,
                profiles : state.profiles.filter(p=> p.id !== action.payload)
            }
        default:
            return state
    }
}
