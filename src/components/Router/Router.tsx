import {Outlet, ReactLocation, Router} from 'react-location'
import {Home} from 'src/views/Home'
import {Mission} from 'src/views/Mission'

const location = new ReactLocation()

export default function BaseRouter() {
  return (
    <Router
      location={location}
      routes={[
        {path: '/', element: <Home />},
        {path: '/mission/:id', element: <Mission />},
      ]}
    >
      <div>
        <Outlet />
      </div>
    </Router>
  )
}
