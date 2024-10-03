import { useDispatch, useSelector } from 'react-redux'
import {
  setTitleFilter,
  selectTitleFilter,
} from '../../redux/slices/filterSlice'

import './Fiter.css'

const Fiter = () => {
  const dispatch = useDispatch()

  const titleFilter = useSelector(selectTitleFilter)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  return (
    <div className="app-block filter">
      {/* <h2>Fiter</h2> */}
      <div className="filter-group">
        <input
          type="text"
          value={titleFilter}
          placeholder="Filter be title..."
          onChange={handleTitleFilterChange}
        />
      </div>
    </div>
  )
}

export default Fiter
