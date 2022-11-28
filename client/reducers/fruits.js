import { SET_FRUITS } from '../actions'

function fruitsfunction(state = [], action) {
  const { type, payload } = action

  if (type === SET_FRUITS) {
    return payload
  }
  if (type === 'ADD_FRUIT') {
    return [...state, payload]
  } else {
    return state
  }

  // switch (type) {
  //   case RECEIVE_POSTS:
  //     return payload
  //   default:
  //     return state
  // }
}

export default fruitsfunction
