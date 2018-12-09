import * as types from '../constants/ActionTypes'
 // eslint-disable-next-line
//import firebase from "firebase"

let nextMessageId = 0
// eslint-disable-next-line
const nextUserId = 0

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
  
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})
