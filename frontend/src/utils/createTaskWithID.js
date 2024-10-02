import { v4 as uuidv4 } from 'uuid'

const createTaskWithID = (task) => {
  return {
    ...task,
    isFavorite: false,
    id: uuidv4(),
  }
}

export default createTaskWithID
