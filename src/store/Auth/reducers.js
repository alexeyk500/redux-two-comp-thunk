import {CHANGE_EMAIL, CHANGE_PASSWORD} from './actions'

const initialState ={
  email: '',
  password: '',
}

function AuthReducer (state=initialState, actions) {
  switch (actions.type) {
    case CHANGE_EMAIL: {
      return {...state, email: actions.payload}
    }
    case CHANGE_PASSWORD: {
      return {...state, password: actions.payload}
    }
    default: return state
  }
}

export default AuthReducer;
