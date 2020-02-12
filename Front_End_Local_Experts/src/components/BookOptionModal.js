import React, {Component} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import axios from 'axios'

class BookOptionModal extends Component {

  State = {

  }
  addExpToCart = () => {
    axios.post(`http://localhost:4001/api/v1/users/${localStorage.user.id}`)
  }
  

  render() {
    return (
    <Modal trigger={<Button >{this.props.start_at}</Button>} basic size='small'>
      <Header icon='calendar plus outline' content='Add this Experience to your Cart?' />
      {/* <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content> */}
      <Modal.Actions>
        <Button onClick={this.addExpToCart} color='green' inverted>
          <Icon name='checkmark' /> Yes
        </Button>
        {/* <Button basic color='red' inverted>
          <Icon name='remove' /> No
        </Button> */}
      </Modal.Actions>
    </Modal>
      )
  }
}

export default BookOptionModal

