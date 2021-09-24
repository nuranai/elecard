import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sortCards, resetCards } from "../store/slices/catalogSlice"

export default function Footer() {
  const [sortType, setSortType] = useState("image")
  const [sortDirection, setSortDirection] = useState("ascend")

  const view = useSelector(state => state.view)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(sortCards({ sortType, sortDirection }))
  }, [sortType, sortDirection])

  const sortTypeHandler = (e) => setSortType(e.target.value)

  const sortDirectionHandler = (e) => setSortDirection(e.target.value)

  const resetHandler = () => {
    dispatch(resetCards())
    setSortType('image')
    setSortDirection('ascend')
  }

  return (
    <footer>
      {view === 'card'
        ? <>
          <div>
            <span>Sort Type:</span>
            <input
              onChange={sortTypeHandler}
              id="name"
              type="radio"
              name="sort-type"
              value="image"
              checked={sortType === 'image'}
            />
            <label htmlFor="name">Name</label>
            <input
              onChange={sortTypeHandler}
              id="date"
              type="radio"
              name="sort-type"
              value="timestamp"
              checked={sortType === 'timestamp'}
            />
            <label htmlFor="date">Date</label>
            <input
              onChange={sortTypeHandler}
              id="category"
              type="radio"
              name="sort-type"
              value="category"
              checked={sortType === 'category'}
            />
            <label htmlFor="category">Category</label>
            <input
              onChange={sortTypeHandler}
              id="size"
              type="radio"
              name="sort-type"
              value="filesize"
              checked={sortType === 'filesize'}
            />
            <label htmlFor="size">Size</label>
          </div>
          <div>
            <span>Sort Direction:</span>
            <input
              onChange={sortDirectionHandler}
              id="ascend"
              type="radio"
              name="sort-dir"
              value="ascend"
              checked={sortDirection === 'ascend'} 
              />
            <label htmlFor="ascend">Ascending</label>
            <input
              onChange={sortDirectionHandler}
              id="descend"
              type="radio"
              name="sort-dir"
              value="descend"
              checked={sortDirection === 'descend'} 
            />
            <label htmlFor="descend">Descending</label>
          </div>
          <button onClick={resetHandler}>Reset</button>
        </>
        : null
      }
    </footer>
  )
}