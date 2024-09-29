import { useState } from 'react'

import './BForm.css'

const BForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  // const [formData, setFormData]=useState({})
  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      // dispatch action
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
      </form>
    </div>
  )
}

export default BForm
