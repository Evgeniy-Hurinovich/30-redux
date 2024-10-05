import { v4 as uuidv4 } from 'uuid'

const createTaskWithID = (task, sourse) => {
  return {
    ...task,
    sourse: sourse,
    isFavorite: false,
    id: uuidv4(),
  }
}

export default createTaskWithID
