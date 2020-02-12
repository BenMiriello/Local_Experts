import React from 'react'
import {Modal, Button, Image} from 'semantic-ui-react'
// import EventList from './EventList'
import MapInsert from './MapInsert'

class UserPageExperienceModal extends React.Component{
    render(){
        if (this.props.evt_exp.event) {
            return(
                <Modal style={{ height: '60%', width: '80%' }} trigger={<Button color="blue">See Details</Button>}>
                    <Modal.Header className="event-modal-header">{this.props.evt_exp.experience.name}</Modal.Header>
                    <Modal.Content image>
                    <Image wrapped size='large' src={this.props.evt_exp.experience.image} />
                    <Modal.Description class="event-modal-description" style={{"max-width": "40%"}}>
                        <h4>Led by: {this.props.evt_exp.experience.host_name}</h4>
                        {/* <p>Location: {this.props.evt_exp.experience.location_name}</p> */}
                        {/* <p>Category: {this.props.evt_exp.experience.category}</p> */}
                        <p>From: {this.props.evt_exp.event.start_at.slice(11, 16)} To: {this.props.evt_exp.event.end_at.slice(11, 16)}</p>
                        <h4>Taking Place On: {this.props.evt_exp.event.start_at.slice(0,10)}</h4>
                        <p>{this.props.evt_exp.experience.description}</p>
                    </Modal.Description>
                    <MapInsert experience={this.props.evt_exp.experience}/>
                    </Modal.Content>
                </Modal>
            )
        } else {
            return(
                "Event details not found..."
            )
        }
    }
}

export default UserPageExperienceModal

