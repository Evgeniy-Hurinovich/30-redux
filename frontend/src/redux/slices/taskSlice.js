import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'
import createTaskWithID from '../../utils/createTaskWithID'

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
export const thunkFun = async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:4000/random-task')
    if (res.data && res.data.title && res.data.author) {
      dispatch(addTask(createTaskWithID(res.data, 'API')))
    }
  } catch (error) {
    console.log('error', error)
  }
}

export const selectTask = (state) => state.task
export default taskSlice.reducer
