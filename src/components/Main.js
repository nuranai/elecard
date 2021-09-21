import { useEffect } from "react"
import ReactPaginate from "react-paginate"

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
    <div className="page_wrapper">
      <ul className="card_wrapper">
        {catalog.elements.slice(0, 50).map((elem, index) =>
          <Card element={elem} key={index}/>
        )}
      </ul>

      <ReactPaginate
        pageCount={catalog.elements.length / 10}
        containerClassName={'pagination__container'}
        pageLinkClassName={'pagination__page'}
        activeLinkClassName={'pagination__active'}
        nextLinkClassName={'pagination__page pagination__button'}
        previousLinkClassName={'pagination__page pagination__button'}
        breakLinkClassName={'pagination__page'}
      />
    </div>
  )
}