import React from 'react'
import {Modal, Button, Image} from 'semantic-ui-react'
import EventList from './EventList'
import MapInsert from './MapInsert'

class ExperienceModal extends React.Component{

    render(){
        return(
            <Modal style={{ height: '60%', width: '80%' }} trigger={<Button color='orange'>View Dates</Button>}>
                <Modal.Header className="event-modal-header">{this.props.experience.name}</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='large' src={this.props.experience.image} />
                <Modal.Description class="event-modal-description">
                    <h4>Led by: {this.props.experience.host_name}</h4>
                    <p>Location: {this.props.experience.location_name}</p>
    f                <p>From: {this.props.experience.events[0].start_at.slice(11, 16)} To: {this.props.experience.events[0].end_at.slice(11, 16)}</p>
                    <h4>Available on These Dates:</h4>
                    <EventList events={this.props.experience.events}/>
                </Modal.Description>
                <MapInsert experience={this.props.experience}/>
                </Modal.Content>
            </Modal>
        )
    }
}

export default ExperienceModal

