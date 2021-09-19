export default function Header() {
  return (
    <header>
      <div>
        <input id="card" type="radio" name="view_type" value="card" defaultChecked />
        <label htmlFor="card">Card</label>
        <input id="tree" type="radio" name="view_type" value="tree" />
        <label htmlFor="tree">Tree</label>
      </div>
      <div>
        <input id="category" type="radio" name="sort-type" value="category" defaultChecked/>
        <label for="category">Category</label>
        <input id="date" type="radio" name="sort-type" value="date" />
        <label for="date">Date</label>
        <input id="name" type="radio" name="sort-type" value="name" />
        <label for="name">Name</label>
        <input id="size" type="radio" name="sort-type" value="size" />
        <label for="size">Size</label>
      </div>
      <div>
        <input id="ascend" type="radio" name="sort-dir" value="ascend" />
        <label for="ascend">Ascending</label>
        <input id="descend" type="radio" name="sort-dir" value="descend" defaultChecked/>
        <label for="descend">Descending</label>
      </div>
    </header>
  )
}