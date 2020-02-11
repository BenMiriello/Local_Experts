import React, {Component} from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer'
import SubMenu from './components/SubMenu'
import ExperienceContainer from './containers/ExperienceContainer'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {Switch} from 'react-router'
import SignUp from './components/SignUp'

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
  // renderAllExperiences = () => {
  //   <ExperienceContainer allExperiences={this.state.allExperiences}/>
    
  // }
  
  renderExperiences = () => <ExperienceContainer allExperiences={this.state.allExperiences} />

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <HeaderContainer />
        <SubMenu allExperiences={this.state.allExperiences} />
        <Router>
          <Switch>
            <Route exact path="/exp" exact render={this.renderExperiences} />
            {/* <Route path="/checkout" exact render={() => <Checkout />} /> */}
            {/* <Route path="/signup" exact render={() => <SignUp />} /> */}
            <Route path="/" render={() => <></>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

