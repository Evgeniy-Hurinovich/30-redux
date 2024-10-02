import * as a from './actionTypes'

const initialState = []

const taskReduser = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_TASK:
      return [...state, action.payload]

    case a.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload)
    case a.TOGGLE_FAVORITE:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isFavorite: !task.isFavorite }
          : task
      )

    default:
      return state
  }
}
export default taskReduser
