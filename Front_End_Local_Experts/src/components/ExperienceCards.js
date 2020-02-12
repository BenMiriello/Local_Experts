import React, {Component} from 'react'
import { Card, Icon, Label, Button, Header, Image, Modal } from 'semantic-ui-react'
// import {ExperienceModal} from './ExperienceModal'

class ExperienceCards extends Component {
  
  // const handleCardClick = () => {
  //   // return <ExperienceModal />
  //   console.log('haha u clicked me');
  // }
  
  // const handleViewDatesClick = (e) => {
  //   e.stopPropagation()
  //   console.log('u clicked View Dates')
  // }
  
  // const handleAddToFavoritesClick = (e) => {
  //   e.stopPropagation()
  //   console.log('u clicked the Fave Icon')
  // }

  
    // <div className="card-extra-div">
    /* <div className="card-extra-div-left" >
    <Button onClick={handleViewDatesClick} color='orange'>View Dates</Button>
    </div>
    <div className="card-extra-div-right">
    <Icon onClick={handleAddToFavoritesClick} name='favorite' />
    </div> */
  
  extra = (
    <Modal trigger={<Button color='orange'>View Dates</Button>}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src={this.props.image} />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    )
  

  render(){
    console.log(this.props.experience)
    let {image, name , description, category} = this.props.experience
    return (
      <Card
        className="experience-card"
        // onClick={handleCardClick}
        image={image}
        header={name}
        meta={category}
        description={description.substring(0,70) + "..."}
        extra={this.extra}
      />
    )
  }
}

export default ExperienceCards

