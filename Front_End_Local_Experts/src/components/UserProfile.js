import React, { Component } from 'react'
import axios from 'axios'
import {Card, Grid, Segment, Divider, Header} from 'semantic-ui-react'
import UserPageExperienceModal from './UserPageExperienceModal'
// import {Modal, Button, Image} from 'semantic-ui-react'
// import EventList from './EventList'
// import MapInsert from './MapInsert'
import MyExperienceCard from './MyExperienceCard'
// import MyExperienceModal from './MyExperienceModal'

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
                        extra={<UserPageExperienceModal experience={experience} />}
                    />
                )
            )
        } else {
            return "Either you aren't logged in or you haven't favorited any experiences yet..."
        }
    }

    myExperiences = () => {
        console.log('user booked exps ', this.state.userLogged.my_experiences)
        if (this.state.userLogged.my_experiences) {
            return(
                this.state.userLogged.my_experiences.map(evt_exp => 

                    <MyExperienceCard evt_exp={evt_exp}/>

                    // <Card
                    //     className="experience-card"
                    //     image={evt_exp.experience.image}
                    //     header={evt_exp.experience.name}
                    //     meta={evt_exp.experience.category}
                    //     description={evt_exp.experience.description.substring(0,70) + "..."}
                    //     extra={<UserPageExperienceModal experience={evt_exp.experience} />}
                    // />
                ) 
            )
        } else {
            return "Are You Experienced?"
        }
    }

    render() {
        return (
            <>
                <Header as='h1'>Welcome, {this.state.userLogged.name}</Header>
                <Segment>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                            <Header>My Favorites</Header>
                            <div className="cards-container">
                                {this.showFavorites()}
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <Header>My Experiences</Header>
                            <div className="cards-container">
                                {this.myExperiences()}
                            </div>
                        </Grid.Column>
                    </Grid>
            
                    <Divider vertical></Divider>
                </Segment>
            </>
        )
    }
}

export default UserProfile



// user logs in
// redirects here
// also add statement to change login to log out
//
