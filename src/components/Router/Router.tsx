import {Route, Routes} from 'react-router-dom'
import {Cameras} from 'src/views/Cameras'
import {Home} from 'src/views/Home'
import {NotFound} from 'src/views/NotFound'
import {SelectedCamera} from 'src/views/SelectedCamera'

export default function BaseRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cameras/:id" element={<Cameras />} />
      <Route path="/types/:camera" element={<SelectedCamera />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
