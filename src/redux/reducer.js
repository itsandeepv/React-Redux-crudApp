import * as types from "./actiontype"


const initialState = {
    users: [],
    user: {},
    loading: true
}




const usersReducers = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_USERS: return {
            ...state,
            users: action.payload,
            loading: false


        }
        case types.DELETE_USER:
        case types.ADD_USER:
        case types.UP_DATE:

            return {
                ...state,
                loading: false
            };

        case types.GET_SINGLE_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }

        default:
            return state;
    }
}



export default usersReducers