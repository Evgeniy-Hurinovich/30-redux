import { configureStore } from '@reduxjs/toolkit'
import taskReduser from './slices/taskSlice'
import filterReducer from './slices/filterSlice'
import errorReducer from './slices/errorSlice'
const store = configureStore({
  reducer: {
    task: taskReduser,
    filter: filterReducer,
    error: errorReducer,
  },
})

export default store
