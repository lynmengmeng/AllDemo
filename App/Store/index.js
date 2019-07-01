import {createStore, combineReducers} from 'redux';
import loginReducer from '../Reducers/LoginReducer';
import homeReducer from '../Reducers/HomeReducer';
import loadingReducer from '../Reducers/LoadingReducer';
import keyboardReducer from '../Reducers/KeyboardReducer';

const reducers = combineReducers({
    loginReducer,
    loadingReducer,
    homeReducer,
    keyboardReducer
});

export default createStore(reducers)
