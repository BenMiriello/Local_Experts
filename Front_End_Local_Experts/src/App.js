import React, {Component} from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer'
import SubMenu from './components/SubMenu'
import ExperienceContainer from './containers/ExperienceContainer'

export default class App extends Component {

  state = {
    allExperiences: []
  }

  componentDidMount(){
    fetch('http://localhost:4001/api/v1/users/2')
    .then(r => r.json())
    .then(console.log)

    fetch('http://localhost:4001/api/v1/experiences')
    .then(r => r.json())
    .then(data => {
      this.setState({
        allExperiences: data
      })
    })
  }

  render() {

    return (
      <div className="App">
        <HeaderContainer />
        <SubMenu />
        <ExperienceContainer allExperiences={this.state.allExperiences} />
      </div>
    );
  }
}
