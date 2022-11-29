import { getFruits, createFruit, deleteFruit } from '../services/fruits-api'

export const SHOW_ERROR = 'SHOW_ERROR'

export const REMOVE_FRUIT = 'REMOVE_FRUIT'

export const CHANGE_FRUIT = 'CHANGE_FRUIT'

export const SET_FRUITS = 'SET_FRUITS'

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function addFruit(fruit) {
  return {
    type: 'ADD_FRUIT',
    payload: fruit,
  }
}
export function removeFruit(fruit) {
  return {
    type: REMOVE_FRUIT,
    payload: fruit,
  }
}
export function changeFruit(fruit) {
  return {
    type: CHANGE_FRUIT,
    payload: fruit,
  }
}
export function setFruits(fruits) {
  return { type: SET_FRUITS, payload: fruits }
}

export function fetchFruit() {
  return (dispatch) => {
    getFruits()
      .then((apple) => {
        console.log(apple)
        dispatch(setFruits(apple))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
export function pushFruit(fruit) {
  return (dispatch) => {
    createFruit(fruit)
      .then((newFruit) => {
        console.log(newFruit)
        dispatch(addFruit(newFruit))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
export function delFruit(fruit) {
  return (dispatch) => {
    deleteFruit(fruit)
      .then(() => {
        dispatch(removeFruit(fruit))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
