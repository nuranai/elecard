import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { sortElements, fetchCatalog } from "../store/slices/catalogSlice"

export default function Footer() {
  const [sortType, setSortType] = useState("image")
  const [sortDirection, setSortDirection] = useState("ascend")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(sortElements({sortType, sortDirection}))
  }, [sortType, sortDirection])

  const sortTypeHandler = (e) => setSortType(state => state = e.target.value)

  const sortDirectionHandler = (e) => setSortDirection(e.target.value)

  return (
    <footer>
      <div>
        <span>Sort Type:</span>
        <input onChange={sortTypeHandler} id="name" type="radio" name="sort-type" value="image" defaultChecked />
        <label htmlFor="name">Name</label>
        <input onChange={sortTypeHandler} id="date" type="radio" name="sort-type" value="timestamp" />
        <label htmlFor="date">Date</label>
        <input onChange={sortTypeHandler} id="category" type="radio" name="sort-type" value="category" />
        <label htmlFor="category">Category</label>
        <input onChange={sortTypeHandler} id="size" type="radio" name="sort-type" value="filesize" />
        <label htmlFor="size">Size</label>
      </div>
      <div>
      <span>Sort Direction:</span>
        <input onChange={sortDirectionHandler} id="ascend" type="radio" name="sort-dir" value="ascend" defaultChecked />
        <label htmlFor="ascend">Ascending</label>
        <input onChange={sortDirectionHandler} id="descend" type="radio" name="sort-dir" value="descend" />
        <label htmlFor="descend">Descending</label>
      </div>
      <button onClick={() => dispatch(fetchCatalog())}>Reset</button>
    </footer>
  )
}