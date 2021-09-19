export default function Card({url}) {

  return (
    <li>
      <img src={`http://contest.elecard.ru/frontend_data/${url}`} alt={url}/>
    </li>
  )
}