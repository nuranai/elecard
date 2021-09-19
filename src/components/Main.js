import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCatalog } from "../store/slices/catalogSlice"
import Card from "./Card"

export default function Main() {
  const dispatch = useDispatch()
  const catalog = useSelector(state => state.catalog)

  useEffect(() => {
    dispatch(fetchCatalog())
  }, [])

  return (
    <div>
      <ul>
        {catalog.elements.slice(0, 50).map((elem, index) =>
          <Card url={elem.image} key={index}/>
        )}
      </ul>
    </div>
  )
}