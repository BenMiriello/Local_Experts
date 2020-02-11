import React, {Component} from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer'
import SubMenu from './components/SubMenu'
import ExperienceContainer from './containers/ExperienceContainer'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
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

  render() {

    return (
      <div className="App">
        <HeaderContainer />
        <SubMenu allExperiences={this.state.allExperiences} />
        <Router> 
          <Route path="/" exact render={() => <ExperienceContainer allExperiences={this.state.allExperiences} /> } />
          {/* <Route path="/checkout" exact render={() => <Checkout />} /> */}
          <Route path="/signup" exact render={() => <SignUp />} />
        </Router>
      </div>
    );
  }
}

