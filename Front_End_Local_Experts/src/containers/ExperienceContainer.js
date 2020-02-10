import React, { Component } from 'react'
import ExperienceCards from '../components/ExperienceCards'

export default class ExperienceContainer extends Component {
    render() {
        // console.log(this.props)
        const experienceCards = this.props.allExperiences.map(expObj => 
            <ExperienceCards key={'exp' + expObj.id} experience={expObj} /> )
        return (
            <div>
                {experienceCards}
            </div>
        )
    }
}

