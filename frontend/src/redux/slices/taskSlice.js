import { createSlice } from '@reduxjs/toolkit'

const initialState = []
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload)
    },
    toggleFavorite: (state, action) => {
      state.forEach((task) => {
        if (task.id === action.payload) {
          task.isFavorite = !task.isFavorite
        }
      })
    },
  },
})

export const { addTask, deleteTask, toggleFavorite } = taskSlice.actions
export const selectTask = (state) => state.task
export default taskSlice.reducer
