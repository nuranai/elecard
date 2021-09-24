import { useSelector } from 'react-redux'
import TreeBranch from './TreeBranch'

export default function Tree() {
  const catalog = useSelector(state => state.catalog)

  const treeBranchHandler = (e) => {
    e.target.classList.toggle('carrier_active')
    e.target.nextElementSibling.classList.toggle("active")
  }

  return (
    <div className="page_wrapper">
      <ul className="tree_root">
        <li><span onClick={treeBranchHandler} className="carrier">Catalog:</span>
          <ul className="nested">
            {
              catalog.categories
                .map(val => <TreeBranch key={val} category={val} treeBranchHandler={treeBranchHandler} />)
            }
          </ul>
        </li>
      </ul>
    </div>
  )
}