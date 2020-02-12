import React from 'react'
import {List} from 'semantic-ui-react'
import BookOptionModal from './BookOptionModal'

class EventList extends React.Component {

    renderLiItem = (evt) => {
        console.log(evt)
        return(
            <List.Item onClick={this.handleLiClick}>
                <div className="event-li-item">
                    <List.Icon name='calendar plus outline' size='large' verticalAlign='middle' />
                    <List.Header as='a'>
                        <BookOptionModal color="gray" event={evt} start_at={evt.start_at.slice(0,10)}/>
                    </List.Header>
                </div>
            </List.Item>
        )
    }

    render(){
        return(
            <List divided relaxed class="event-list">
                {this.props.events.map(evt => this.renderLiItem(evt))}
            </List>
        )
    }
}

export default EventList