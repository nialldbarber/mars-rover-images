import {Card} from 'src/components/Card'
import {Title} from 'src/components/Title'

export default function Home() {
  return (
    <div>
      <Title text="Mars Rover Images" isTruncated />
      <div>
        <Card title="Curiosity" link="curiosity" />
        <Card title="Opportunity" link="opportunity" />
        <Card title="Spirit" link="spirit" />
      </div>
    </div>
  )
}
