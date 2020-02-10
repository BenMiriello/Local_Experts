import React, { Component } from 'react'
import ExperienceCards from '../components/ExperienceCards'

export default class ExperienceContainer extends Component {
    render() {
        const experienceCards = this.props.allExperiences.map(expObj => 
            <ExperienceCards key={'exp' + expObj.id} experience={expObj} /> )
        return (
            <div className="cards-container" >
                {experienceCards}
            </div>
        )
    }
}

