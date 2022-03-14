import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { usersReducer } from './usersReducer'
// import { reducerCarts } from './reducerCarts'

export const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer
})
