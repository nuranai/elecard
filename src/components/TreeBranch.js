import { useSelector } from "react-redux"
import Image from "./Image"

export default function TreeBranch({ category, treeBranchHandler }) {
  const catalog = useSelector(state => state.catalog)
  
  return (
    <li>
      <span onClick={treeBranchHandler} className="carrier">{category}</span>
      <ul className="nested">
        {
          catalog.elements
            .filter(val => val.category === category)
            .map((val, index) => <li key={index}>
              <Image url={`http://contest.elecard.ru/frontend_data/${val.image}`}/>
            </li>
            )
        }
      </ul>
    </li>
  )
}