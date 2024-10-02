import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addTask } from '../../redux/tasks/actionCreator'
import taskData from '../../data/task.json'
import './BForm.css'

const BForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  // const [formData, setFormData]=useState({})
  const dispatch = useDispatch()

  const handlAddRNDTask = () => {
    const rndIndex = Math.floor(Math.random() * taskData.length)
    const rndTask = taskData[rndIndex]
    const rndTaskWithID = {
      ...rndTask,
      id: uuidv4(),
      isFavorite: false,
    }
    dispatch(addTask(rndTaskWithID))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      const task = {
        title: title,
        author: author,
        id: uuidv4(),
        isFavorite: false,
      }
      dispatch(addTask(task))

      setTitle('')
      setAuthor('')
    }
  }
  return (
    <div className="app-block book-form">
      <h2>Add a new task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add task</button>
        <button type="button" onClick={handlAddRNDTask}>
          Add RND task
        </button>
      </form>
    </div>
  )
}

export default BForm
