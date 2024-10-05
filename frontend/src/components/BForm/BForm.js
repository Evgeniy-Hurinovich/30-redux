import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask, fetchTask } from '../../redux/slices/taskSlice'
import createTaskWithID from '../../utils/createTaskWithID'
import taskData from '../../data/task.json'
import './BForm.css'

const BForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()
  const handlAddRNDTask = () => {
    const rndIndex = Math.floor(Math.random() * taskData.length)
    const rndTask = taskData[rndIndex]
    dispatch(addTask(createTaskWithID(rndTask, 'random')))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      dispatch(addTask(createTaskWithID({ title, author }, 'manual')))
      setTitle('')
      setAuthor('')
    }
  }

  const handlAddRNDTaskAPI = () => {
    dispatch(fetchTask())
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
        <button type="button" onClick={handlAddRNDTaskAPI}>
          Add rnd API
        </button>
      </form>
    </div>
  )
}

export default BForm
