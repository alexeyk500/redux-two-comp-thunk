import {combineReducers} from 'redux';
import AuthReducer from './Auth/reducers';
import TodoReducer from './TodoPart/reducers';

const RootReducer = combineReducers({
  auth: AuthReducer,
  todoPart:TodoReducer,
})

export default RootReducer;
