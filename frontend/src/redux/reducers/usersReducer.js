import { USERS } from '../types'

export const usersReducer = (state = [], action) =>{
  const {type, payload} = action

  switch (type) {
    case USERS: {
      const { data } = payload
      return [...state, ...data]
    }
    
    default: {
      return state
    }
  }
}
