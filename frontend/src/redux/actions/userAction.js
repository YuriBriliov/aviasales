import { USER, USERS, UPDATE } from "../types"

const allUsers = (data) => {
  // console.log(data)
  return {
    type: USERS,
    payload: { data }
  }
}


const oneUser = (data) =>{
  return{
    type: USER,
    payload: { data }
  }
}

const patchUser = (data) =>{
  return{
    type: UPDATE,
    payload: { data }
  }
}

export const getUser = () => async (dispatch) =>{
  try {
    const response = await fetch('http://localhost:3001/user',{
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    const data = await response.json()
    dispatch(oneUser(data))
  } catch (error) {
    console.log(error)
  }
}

export const newUser = (item) => async (dispatch) =>{
  try {
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: item
    }
    const response = await fetch('http://localhost:3001/user', options)
    const data = await response.json()
    dispatch(oneUser(item))
  } catch (error) {
    console.log(error)
  }
}


export const updateUser = (item) => async (dispatch) =>{
  try {
    const options = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(item)
    }
    const response = await fetch('http://localhost:3001/user', options)
    const data = await response.json()
    // console.log(data)
    dispatch(patchUser(data))
  } catch (error) {
    console.log(error)
  }
}





