import { useDispatch, useSelector } from 'react-redux'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import {
  deleteTask,
  toggleFavorite,
  selectTask,
} from '../../redux/slices/taskSlice'
import './BList.css'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice'

const BList = () => {
  const task = useSelector(selectTask)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
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
    const matchesAuthor = task.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())
    const matchesFavorite = onlyFavoriteFilter ? task.isFavorite : true

    return matchesTitle && matchesAuthor && matchesFavorite
  })

  const highlightMatch = (text, filter) => {
    if (!filter) return text
    const regex = new RegExp(`(${filter})`, `gi`)
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        )
      }
      return substring
    })
  }

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
                {++i}. {highlightMatch(task.title, titleFilter)} by{' '}
                <strong>{highlightMatch(task.author, authorFilter)}</strong> (
                {task.sourse})
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
