import { useDispatch } from "react-redux"
import { changeView } from "../store/slices/viewSLice"

export default function Header() {
  const dispatch = useDispatch()

  return (
    <header>
      <div>
        <input onChange={(e)=> dispatch(changeView(e.target.value))} id="card" type="radio" name="view_type" value="card" defaultChecked />
        <label htmlFor="card">Card</label>
      </div>
      <div>
        <input onChange={(e)=> dispatch(changeView(e.target.value))} id="tree" type="radio" name="view_type" value="tree" />
        <label htmlFor="tree">Tree</label>
      </div>
    </header>
  )
}