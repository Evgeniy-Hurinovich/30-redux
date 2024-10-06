import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import createTaskWithID from '../../utils/createTaskWithID'
import { setError } from './errorSlice'

const initialState = []

export const fetchTask = createAsyncThunk(
  'task/fetchTask',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      throw error
    }
  }
)
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
  extraReducers: (builder) => {
    builder.addCase(fetchTask.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createTaskWithID(action.payload, 'API'))
      }
    })
  },
})

export const { addTask, deleteTask, toggleFavorite } = taskSlice.actions

export const selectTask = (state) => state.task
export default taskSlice.reducer
