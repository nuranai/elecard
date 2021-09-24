import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCatalog } from "../store/slices/catalogSlice"
import Spinner from './Spinner'
import ReactPaginate from "react-paginate"
import Card from "./Card"


export default function Tree() {
  const [cardsPaginationStart, setCardsPaginationStart] = useState(0)

  const dispatch = useDispatch()

  const cards = useSelector(state => state.catalog.cardElements)
  
  useEffect(() => {
      dispatch(fetchCatalog())
  }, [])

  return (
    <div className="page_wrapper">

      {cards.loading ? <Spinner /> : null}
      <ul className="card_wrapper">
        {cards.slice(cardsPaginationStart, cardsPaginationStart + 50).map((elem, index) =>
          <Card element={elem} key={index} />
        )}
      </ul>

      <ReactPaginate
        onPageChange={({ selected }) => { setCardsPaginationStart(selected * 50); console.log(selected * 50) }}
        pageCount={cards.length / 50}
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