import React, {Component} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import axios from 'axios'

class BookOptionModal extends Component {

  State = {

  }
  addExpToCart = () => {
    console.log(this.props)
    const userID = localStorage.id
    const {id} = this.props.event
    const newExp = {
      number_of_guests: 1,
      user_id: userID,
      event_id: id
    }
    axios.post(`http://localhost:4001/api/v1/saves`,newExp)
  }

  render() {
    // console.log(this.props)
    return (
    <Modal trigger={<Button >{this.props.start_at}</Button>} basic size='small'>
      <Header icon='calendar plus outline' content='Add this Experience to your Cart?' />
      
      <Modal.Actions>
        <Button onClick={this.addExpToCart} color='green' inverted>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
      )
  }
}

export default BookOptionModal

