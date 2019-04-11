import * as actionTypes from '../actions';


const initialState = {

    friends: [],
    gettingFriends: false,
    updatingFriends: false,
    creatingFriends: false,
    deletingFriends: false,
    error: null

};

export const friendsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETTING_FRIENDS:
            return {
                ...state,
                gettingFriends: true
            };
        case actionTypes.GET_FRIENDS:
            return {
                ...state, 
                friends: action.payload,
                gettingFriends: false
            };
        case actionTypes.UPDATING_FRIEND:
            return { ...state, updatingFriends: true };
        case actionTypes.UPDATE_FRIEND:
            return { ...state, friends: action.payload, updatingFriends: false };
        case actionTypes.DELETING_FRIEND:
            return { ...state, deletingFriends: true };
        case actionTypes.DELETE_FRIEND:
            return { ...state, friends: action.payload, deletingFriends: false };
        case actionTypes.CREATING_FRIEND:
            return { ...state, creatingFriends: true };
        case actionTypes.CREATE_FRIEND:
            return { ...state, friends: action.payload, creatingFriends: false };
        case actionTypes.ERROR:
            return {
                ...state,
                gettingFriends: false,
                creatingFriends: false,
                deletingFriends: false,
                updatingFriends: false,
                error: action.payload
            };

        default:
            return state;
            
    }
}