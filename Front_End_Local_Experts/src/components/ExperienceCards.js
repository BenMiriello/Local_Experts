import React, {Component} from 'react'
import { Card, List, Icon, Label, Button, Header, Image, Modal } from 'semantic-ui-react'
import EventList from './EventList'
import MapInsert from './MapInsert'
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
    <Modal style={{ height: '60%', width: '80%' }} trigger={<Button color='orange'>View Dates</Button>}>
      <Modal.Header className="event-modal-header">{this.props.experience.name}</Modal.Header>
        <Modal.Content image>
        <Image wrapped size='large' src={this.props.experience.image} />
        <Modal.Description class="event-modal-description">
          {/* <Header class="modal-header">{this.props.experience.location_name}</Header> */}
          <h4>Led by: {this.props.experience.host_name}</h4>
          <p>Location: {this.props.experience.location_name}</p>
          <p>From: {this.props.experience.events[0].start_at.slice(11, 16)} To: {this.props.experience.events[0].end_at.slice(11, 16)}</p>
          <h4>Available on These Dates:</h4>
          <EventList events={this.props.experience.events}/>
        </Modal.Description>
        <MapInsert experience={this.props.experience}/>
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

