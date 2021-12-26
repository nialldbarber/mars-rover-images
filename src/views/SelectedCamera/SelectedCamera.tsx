import {useParams} from 'react-router-dom'
import {Title} from 'src/components/Title'
import {CAMERAS} from 'src/constants/rovers'

export default function SelectedCamera() {
  let {camera} = useParams()

  return (
    <div>
      <Title text={CAMERAS[camera]} />
      <p>SelectedCamera</p>
    </div>
  )
}
