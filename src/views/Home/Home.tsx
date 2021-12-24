import {Card} from 'src/components/Card'
import {Title} from 'src/components/Title'

export default function Home() {
  return (
    <div>
      <Title text="Mars Rover Images" isTruncated />
      <div>
        <Card title="Curiosity" link="cameras/curiosity" />
        <Card title="Opportunity" link="cameras/opportunity" />
        <Card title="Spirit" link="cameras/spirit" />
      </div>
    </div>
  )
}
