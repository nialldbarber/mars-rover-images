import {Link, Outlet, ReactLocation, Router} from 'react-location'
import {Cameras} from 'src/views/Cameras'
import {Home} from 'src/views/Home'
import {SelectedCamera} from 'src/views/SelectedCamera'

const location = new ReactLocation()

export default function BaseRouter() {
  return (
    <Router
      location={location}
      routes={[
        {path: '/', element: <Home />},
        {path: '/cameras/:id', element: <Cameras />},
        {path: '/types/:camera', element: <SelectedCamera />},
      ]}
    >
      <div>
        <Link to="/">
          <p>Logo</p>
        </Link>
        <Outlet />
      </div>
    </Router>
  )
}
