import React from 'react'
import { Card, Icon, Image, Label } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import {ExperienceModal} from './ExperienceModal'



const handleCardClick = () => {
  // return <ExperienceModal />
  console.log('haha u clicked me');
}

const handleViewDatesClick = (e) => {
  e.stopPropagation()
  console.log('u clicked View Dates')
}

const handleAddToFavoritesClick = (e) => {
  e.stopPropagation()
  console.log('u clicked the Fave Icon')
}

const extra = (
  <div className="card-extra-div">
    <div className="card-extra-div-left" >
      <Button onClick={handleViewDatesClick} color='orange'>View Dates</Button>
    </div>
    <div className="card-extra-div-right">
      <Icon onClick={handleAddToFavoritesClick} name='favorite' />
    </div>
  </div>
)

const ExperienceCards = ({experience}) => {
  const {image, name , description, category} = experience
  return (
    <Card
      className="experience-card"
      onClick={handleCardClick}
      image={image}
      header={name}
      meta={category}
      description={description.substring(0,70) + "..."}
      extra={extra}
    />
  )
}

export default ExperienceCards

