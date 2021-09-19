import ReactPaginate from "react-paginate"

export default function Footer() {
  return (
    <footer>
      <ReactPaginate
        containerClassName={'pagination__container'}
        pageLinkClassName={'pagination__page'}
        activeLinkClassName={'pagination__active'}
        nextLinkClassName={'pagination__page pagination__button'}
        previousLinkClassName={'pagination__page pagination__button'}
        breakLinkClassName={'pagination__page'}
      />
    </footer>
  )
}