import React, { Component } from 'react'
import axios from 'axios'
import {Card, Grid, Segment, Divider, Header} from 'semantic-ui-react'
import FavoritesExperienceModal from './FavoritesExperienceModal'

export class UserProfile extends Component {

    state = {
        userLogged: {}
    }

    // use user id in localstorage to fetch that user's info and populate their profile

    componentDidMount(){
        // console.log(localStorage)
        axios.get(`http://localhost:4001/api/v1/users/${localStorage.id}`)
        .then(res => {
            // const userCurrent = res.data
            // console.log('response in userpage fetch ', res.data)
            this.setState({
                userLogged: res.data
            }
            , () => console.log('user logged ', this.state.userLogged)
            )
        })
    }

    showFavorites = () => {

        console.log('user faves', this.state.userLogged.favorite_experiences)
        
        if (this.state.userLogged.favorite_experiences) {
            return(
                this.state.userLogged.favorite_experiences.map(experience => 
                    <Card
                        className="experience-card"
                        image={experience.image}
                        header={experience.name}
                        meta={experience.category}
                        description={experience.description.substring(0,70) + "..."}
                        extra={<FavoritesExperienceModal experience={experience} />}
                    />
                )
            )
        } else {
            return "Either you aren't logged in or you haven't favorited any experiences yet..."
        }
    }

    render() {
        return (
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <Header>My Favorites</Header>
                        {this.showFavorites()}
                    </Grid.Column>
                    <Grid.Column>
                        <Header>My Experiences</Header>
                        {/* {this.showExperiences} */}
                    </Grid.Column>
                </Grid>
        
                <Divider vertical></Divider>
            </Segment>
        )
    }
}

export default UserProfile



// user logs in
// redirects here
// also add statement to change login to log out
//
