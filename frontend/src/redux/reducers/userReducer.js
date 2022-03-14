import { USER, UPDATE } from '../types'

export const userReducer = (state = {}, action) =>{
  const {type, payload} = action

  switch (type) {
    case USER: {
      const { data } = payload
      return data
    }

    case UPDATE: {
      const { data } = payload
      return data
    }
    
    default: {
      return state
    }
  }
}
