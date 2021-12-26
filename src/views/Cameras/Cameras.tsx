import {useParams} from 'react-router-dom'
import {Card} from 'src/components/Card'
import {Title} from 'src/components/Title'
import {cameras} from 'src/constants/rovers'

export default function Cameras() {
  const {id} = useParams()

  return (
    <div>
      <Title text={id} />
      <div>
        {cameras[id].map(({id: missionId, camera}) => {
          return (
            <Card
              key={missionId}
              title={camera}
              link={`/types/${camera.toLowerCase()}`}
            />
          )
        })}
      </div>
    </div>
  )
}
