


const initialState = {
    friendSelected: {},
    statusUpdate: false
};

export const singleFriendReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.SINGLE_FRIEND:
        //     return { 
        //         ...state,
        //         friendSelected: action.payload, 
        //         statusUpdate: false
        //     };
        // case actionTypes.TOGGLE_UPDATE_FRIEND:
        //     return { 
        //         ...state,
        //         statusUpdate: !statusUpdate
        //     };
    
        default:
            return state;
    }
}