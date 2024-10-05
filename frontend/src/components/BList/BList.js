import { useDispatch, useSelector } from 'react-redux'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import { deleteTask, toggleFavorite } from '../../redux/tasks/actionCreator'
import './BList.css'
import { selectTitleFilter } from '../../redux/slices/filterSlice'

const BList = () => {
  const task = useSelector((state) => state.task)
  const titleFilter = useSelector(selectTitleFilter)

  const dispatch = useDispatch()
  const handlDeleteTask = (id) => {
    dispatch(deleteTask(id))
  }

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  const filteredTask = task.filter((task) => {
    const matchesTitle = task.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    return matchesTitle
  })

  return (
    <div className="app-block book-list">
      <h2>Task list</h2>
      {task.lenght === 0 ? (
        <p>No task avilable</p>
      ) : (
        <ul>
          {filteredTask.map((task, i) => (
            <li key={task.id}>
              <div className="book-info">
                {++i}. {task.title} by <strong>{task.author}</strong>
              </div>

              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(task.id)}>
                  {task.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
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
