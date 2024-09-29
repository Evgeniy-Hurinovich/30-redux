import { configureStore } from '@reduxjs/toolkit'
import taskReduser from './tasks/reducer'
const store = configureStore({
  reducer: {
    task: taskReduser,
  },
})

export default store
