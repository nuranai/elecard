export default function Header() {
  return (
    <header>
      <div>
        <input id="card" type="radio" name="view_type" value="card" defaultChecked />
        <label htmlFor="card">Card</label>
      </div>
      <div>
        <input id="tree" type="radio" name="view_type" value="tree" />
        <label htmlFor="tree">Tree</label>
      </div>
    </header>
  )
}