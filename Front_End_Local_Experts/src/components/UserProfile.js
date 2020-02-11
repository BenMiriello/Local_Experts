import React, { Component } from 'react'
import axios from 'axios'
import {Card, Grid, Segment, Divider, Modal, Button, Header, Image, Description, Content} from 'semantic-ui-react'

export class UserProfile extends Component {

    state = {
        userLogged: {}
    }



    // NOTES

    // use user id in localstorage to fetch that user's info and populate their profile

    // then do the same for the cart and other shit



    componentDidMount(){
        console.log(localStorage)
        // axios.get(`http://localhost:4001/api/v1/users/${localStorage.id}`)
        // .then(res => {
        //     const userCurrent = res.data
        //     console.log(res.data)
        //     this.setState({
        //         userLogged: userCurrent,
        //     })
        // })
    }

    showFavorites = () => {

        // console.log(this.state.userLogged.favorites)
        // <Card
        //     className="experience-card"
        //     onClick={handleCardClick}
        //     image={image}
        //     header={name}
        //     meta={category}
        //     description={description.substring(0,70) + "..."}
        //     extra={extra}
        // />
    }

    render() {
        return (
            // some header saying the user's name here
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        {/* header saying: My Favorites */}
                        {this.showFavorites}

                        {/* <p>
                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                        </p>
                        <p>
                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                        </p> */}
                    </Grid.Column>
                    <Grid.Column>
                        {/* header saying My Experiences */}
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
