import { configureStore } from '@reduxjs/toolkit'
import taskReduser from './slices/taskSlice'
import filterReducer from './slices/filterSlice'

const store = configureStore({
  reducer: {
    task: taskReduser,
    filter: filterReducer,
  },
})

export default store
