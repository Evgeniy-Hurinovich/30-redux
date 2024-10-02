import { useDispatch, useSelector } from 'react-redux'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import { deleteTask } from '../../redux/tasks/actionCreator'
import './BList.css'

const BList = () => {
  const task = useSelector((state) => state.task)
  const dispatch = useDispatch()
  const handlDeleteTask = (id) => {
    dispatch(deleteTask(id))
  }
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

              <div className="book-actions">
                {task.isFavorite ? (
                  <BsBookmarkStarFill className="star-icon" />
                ) : (
                  <BsBookmarkStar className="star-icon" />
                )}
                <button onClick={() => handlDeleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BList
