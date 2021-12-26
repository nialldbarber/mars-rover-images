import {Link} from 'react-router-dom'

type CardProps = {
  title: string
  link?: string
}

export default function Card({title, link}: CardProps) {
  const card = (
    <>
      {/* <p>IMAGE</p> */}
      <h3>{title}</h3>
    </>
  )
  return <div>{link ? <Link to={link}>{card}</Link> : card}</div>
}
