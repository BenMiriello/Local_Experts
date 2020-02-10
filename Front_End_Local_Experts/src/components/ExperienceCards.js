import React from 'react'
import { Card, Icon, Label } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'


const extra = (
  <a>
    <Button >
      <Icon 
        name='favorite'
        color="yellow"
      />
      </Button>
  </a>
)

const ExperienceCards = ({experience}) => {
  const {image, name , description, category} = experience
  console.log(experience);
  return (

    <Card
    image={image}
    header={name}
    meta={category}
    description={description.substring(0,70) + "..."}
    extra={extra}
    />
  )
}

export default ExperienceCards

