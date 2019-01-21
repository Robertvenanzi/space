import { combineReducers } from 'redux';
import NavToggleReducer from './navToggleReucers';
import SearchBarReducer from './toggleSearchBarReducer';

export default combineReducers({
    navToggle: NavToggleReducer,
    searchBarToggle: SearchBarReducer
});