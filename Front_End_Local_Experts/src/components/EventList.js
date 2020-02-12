import React from 'react'
import {List, Button} from 'semantic-ui-react'

class EventList extends React.Component {

    handleLiClick = () => {
        console.log('u clicked the li item')
    }
    
    renderLiItem = (evt) => {
        console.log(evt)
        return(
            <List.Item onClick={this.handleLiClick}>
                <div className="event-li-item">
                    <List.Icon name='calendar plus' size='large' verticalAlign='middle' />
                    <List.Header as='a'><Button color="gray">{evt.start_at.slice(0,10)}</Button></List.Header>
                </div>
            </List.Item>
        )
    }

    render(){
        return(
            // <div >
                <List divided relaxed class="event-list">
                    {this.props.events.map(evt => this.renderLiItem(evt))}
                    {/* <List.Item>
                        <List.Icon name='calendar plus' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                            <List.Description as='a'>Updated 22 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='calendar plus' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                            <List.Description as='a'>Updated 34 mins ago</List.Description>
                        </List.Content>
                    </List.Item> */}
                </List>
            // </div>
        )
    }
}

export default EventList