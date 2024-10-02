import { useSelector } from 'react-redux'
import './BList.css'

const BList = () => {
  const task = useSelector((state) => state.task)
  return (
    <div className="app-block book-list">
      <h2>Task list</h2>
      {task.lenght === 0 ? (
        <p>No task avilable</p>
      ) : (
        <ul>
          {task.map((task, i) => (
            <li key={task.id}>
              <div className="book-info">
                {++i}. {task.title} by <strong>{task.author}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BList
