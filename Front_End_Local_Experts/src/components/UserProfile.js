import React, { Component } from 'react'
import axios from 'axios'
import {Card, Grid, Segment, Divider, Modal, Button, Header, Image, Description, Content} from 'semantic-ui-react'
import ExperienceModal from './ExperienceModal'

export class UserProfile extends Component {

    state = {
        userLogged: {}
    }



    // NOTES

    // use user id in localstorage to fetch that user's info and populate their profile

    // then do the same for the cart and other shit



    componentDidMount(){
        // console.log(localStorage)
        axios.get(`http://localhost:4001/api/v1/users/${localStorage.id}`)
        .then(res => {
            const userCurrent = res.data
            // console.log(res.data)
            this.setState({
                userLogged: userCurrent,
            })
        }, () => console.log('user logged ', this.state.userLogged))
    }

    showFavorites = () => {

        console.log('user faves', this.state.userLogged.favorite_experiences)

        this.state.userLogged.favorite_experiences.map(experience => 
            <Card
                className="experience-card"
                // onClick={handleCardClick}
                image={experience.image}
                header={experience.name}
                meta={experience.category}
                description={experience.description.substring(0,70) + "..."}
                extra={<ExperienceModal experience={experience} />}
            />
        )
    }

    render() {
        return (
            // some header saying the user's name here
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <Header>My Favorites</Header>
                        {this.showFavorites}

                        {/* <p>
                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                        </p>
                        <p>
                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                        </p> */}
                    </Grid.Column>
                    <Grid.Column>
                        <Header>My Experiences</Header>
                        {/* {this.showExperiences} */}

                        {/* <p>
                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                        </p>
                        <p>
                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                        </p> */}
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
