import {useMatch} from 'react-location'
import {Title} from 'src/components/Title'

export default function Mission() {
  const {
    params: {id},
  } = useMatch()

  console.log(id)

  return (
    <div>
      <Title text={id} />
    </div>
  )
}
