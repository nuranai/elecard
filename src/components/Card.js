import { deleteElement } from "../store/slices/catalogSlice"
import { useDispatch } from 'react-redux'

export default function Card({ element }) {

  const dispatch = useDispatch()

  return (
    <li className="card">
      <button onClick={() => dispatch(deleteElement(element.image))}>X</button>
      <img src={`http://contest.elecard.ru/frontend_data/${element.image}`} alt={element.image} />
      <p>{element.image}</p>
      <p>{new Date(element.timestamp).toUTCString()}</p>
    </li>
  )
}