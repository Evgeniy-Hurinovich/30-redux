import * as a from './actionTypes'

export const addTask = (newTask) => {
  return {
    type: a.ADD_TASK,
    payload: newTask,
  }
}
