import React from 'react'
import { Card, Button, Image, Header } from 'semantic-ui-react'
import MyExperienceModal from './MyExperienceModal'

const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

const MyExperienceCard = ({evt_exp}) => (
  <Card  style={{"width": "75%"}}>
    <br/>
    <Header as="h1">You're Going to New York in {monthNames[(new Date(evt_exp.event.start_at)).getMonth()]}!</Header>
    <br/>
    <Image src={evt_exp.experience.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{evt_exp.experience.name}</Card.Header>
      <Card.Meta>Hosted by: {evt_exp.experience.host_name}</Card.Meta>
      <Card.Meta>{evt_exp.experience.location_name}</Card.Meta>
      <Card.Description>
        {evt_exp.experience.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <MyExperienceModal  evt_exp={evt_exp}/>
      </a>
    </Card.Content>
  </Card>
)

export default MyExperienceCard

