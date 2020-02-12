import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import ExperienceModal from './FavoritesExperienceModal'


class ExperienceCards extends Component {

  render(){
    // console.log(this.props.experience)
    let {image, name , description, category} = this.props.experience
    return (
      <Card
        className="experience-card"
        // onClick={handleCardClick}
        image={image}
        header={name}
        meta={category}
        description={description.substring(0,70) + "..."}
        extra={<ExperienceModal experience={this.props.experience} />}
      />
    )
  }
}

export default ExperienceCards

