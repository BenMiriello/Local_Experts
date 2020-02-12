import React, {Component} from 'react'
import { Card, Label } from 'semantic-ui-react'
import ExperienceModal from './UserPageExperienceModal'


class ExperienceCards extends Component {

  render(){
    // console.log(this.props.experience)
    let {image, name , description, category} = this.props.experience
    return (
      <Card
        className="experience-card"
        // onClick={handleCardClick}
        image={image}
        label={{ as: 'a', corner: 'right', icon: 'star' }}
        header={name}
        meta={category}
        description={description.substring(0,70) + "..."}
        extra={<ExperienceModal experience={this.props.experience} />}
      />
    )
  }
}

export default ExperienceCards

