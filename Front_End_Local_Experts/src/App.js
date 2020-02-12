import React, {Component} from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer'
import SubMenu from './components/SubMenu'
import ExperienceContainer from './containers/ExperienceContainer'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import SignUp from './components/SignUp'
import ls from 'local-storage'
import UserProfile from './components/UserProfile'
import LandingPage from './components/LandingPage'


export default class App extends Component {

  state = {
    allExperiences: []
  }

  componentDidMount(){
    // fetch('http://localhost:4001/api/v1/users/5')
    // .then(r => r.json())
    // .then(user => { 
    //   localStorage.setItem('user', user.name)
    //   localStorage.setItem('username', user.name)
    //   localStorage.setItem('id', user.id)
    //   // console.log(user)
    // })

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
        <Router> 
        <HeaderContainer />
        <SubMenu allExperiences={this.state.allExperiences} />
          <Route path="/" exact render={() => <LandingPage/>} /> 
          {/* <ExperienceContainer allExperiences={this.state.allExperiences} /> } /> */}
          {/* <Route path="/checkout" exact render={() => <Checkout />} /> */}
          <Route path="/signup" exact render={() => <SignUp />} />
          <Route path='/experiences' exact render={() => <ExperienceContainer allExperiences={this.state.allExperiences} />}/>
          <Route path='/profile' exact render={() => <UserProfile />} />
        </Router>
      </div>
    );
  }
}

