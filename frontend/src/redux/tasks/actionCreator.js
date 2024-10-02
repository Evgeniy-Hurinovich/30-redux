import * as a from './actionTypes'

export const addTask = (newTask) => {
  return {
    type: a.ADD_TASK,
    payload: newTask,
  }
}
export const deleteTask = (id) => {
  return {
    type: a.DELETE_TASK,
    payload: id,
  }
}
export const toggleFavorite = (id) => {
  return {
    type: a.TOGGLE_FAVORITE,
    payload: id,
  }
}
