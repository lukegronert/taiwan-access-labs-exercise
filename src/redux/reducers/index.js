import {combineReducers} from 'redux';
import {setSelectedUserReducer, userReducer} from './userReducer';

const reducers = combineReducers({
    allUsers: userReducer,
    user: setSelectedUserReducer,
})

export default reducers;