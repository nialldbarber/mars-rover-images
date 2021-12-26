import {Link} from 'react-router-dom'
import {Logo} from 'src/components/Header/Header.styles'

export default function Header() {
  return (
    <header>
      <Link to="/">
        <Logo>
          <img
            src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
            alt="Nasa Logo"
          />
        </Logo>
      </Link>
    </header>
  )
}
