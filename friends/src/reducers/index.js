import { combineReducers } from 'redux';
import { friendsListReducer } from './friendsListReducer';
import { singleFriendReducer } from './singleFriendReducer';

export default combineReducers({
    friendsListReducer,
    singleFriendReducer
});
