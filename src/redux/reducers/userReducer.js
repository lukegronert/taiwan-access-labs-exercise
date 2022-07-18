import { ActionTypes } from '../constants/action-types';

const initialState = {
    users: [],
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_USERS:
            return {...state, users: payload};
        default:
            return state;
    }
}

export const setSelectedUserReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_USER:
            return {...state, ...payload};
        default:
            return state;
    }
}