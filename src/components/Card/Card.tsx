import {Link} from 'react-location'

type CardProps = {
  title: string
  link?: string
}

export default function Card({title, link}: CardProps) {
  const card = (
    <>
      <p>IMAGE</p>
      <h3>{title}</h3>
    </>
  )
  return <div>{link ? <Link to={`/mission/${link}`}>{card}</Link> : card}</div>
}
