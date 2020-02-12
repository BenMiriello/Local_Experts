import React from 'react'
import {Modal, Button, Image} from 'semantic-ui-react'
import EventList from './EventList'
import MapInsert from './MapInsert'

class UserPageExperienceModal extends React.Component{

    state={
        events: []
    }

    componentDidMount(){
        fetch(`http://localhost:4001/api/v1/experiences/${this.props.evt_exp.experience.id}`)
        .then(r => r.json())
        .then(exp => {
            this.setState({
                events: exp.events
            })
        })
    }

    render(){
        if (this.state.events.length >= 1) {
            return(
                <Modal style={{ height: '60%', width: '80%' }} trigger={<Button color="blue">See Details</Button>}>
                    <Modal.Header className="event-modal-header">{this.props.evt_exp.experience.name}</Modal.Header>
                    <Modal.Content image>
                    <Image wrapped size='large' src={this.props.evt_exp.experience.image} />
                    <Modal.Description class="event-modal-description">
                        <h4>Led by: {this.props.evt_exp.experience.host_name}</h4>
                        <p>Location: {this.props.evt_exp.experience.location_name}</p>
                        {/* <p>From: {this.state.events[0].start_at.slice(11, 16)} To: {this.state.events[0].end_at.slice(11, 16)}</p> */}
                        <h4>Available on These Dates:</h4>
                        <EventList events={[this.props.evt_exp.events]}/>
                    </Modal.Description>
                    <MapInsert experience={this.props.evt_exp.experience}/>
                    </Modal.Content>
                </Modal>
            )
        } else {
            return(
                "No Events..."
            )
        }
    }
}

export default UserPageExperienceModal

