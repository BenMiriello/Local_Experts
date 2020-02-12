import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const BookOptionModal = (props) => (
  <Modal trigger={<Button >{props.start_at}</Button>} basic size='small'>
    <Header icon='archive' content='Add this Experience to your Cart?' />
    {/* <Modal.Content>
      <p>
        Your inbox is getting full, would you like us to enable automatic
        archiving of old messages?
      </p>
    </Modal.Content> */}
    <Modal.Actions>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
      {/* <Button basic color='red' inverted>
        <Icon name='remove' /> No
      </Button> */}
    </Modal.Actions>
  </Modal>
)

export default BookOptionModal