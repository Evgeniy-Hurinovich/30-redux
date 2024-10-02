import * as a from './actionTypes'

const initialState = []

const taskReduser = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_TASK:
      return [...state, action.payload]

    case a.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload)

    default:
      return state
  }
}
export default taskReduser
