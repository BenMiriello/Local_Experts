import React from 'react'
import {Header} from 'semantic-ui-react'

class LandingPage extends React.Component{

    render(){
        console.log('youre on the landing page')
        return(
            <div className="landing-header">
                <Header as="h1">Welcome to Local Experts</Header>
            </div>
        )
    }

}

export default LandingPage