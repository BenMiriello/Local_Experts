import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import SignUp from './SignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default class MenuBar extends Component {

  state = {
    showSignUp: false,
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSignUp = () => {
    
    this.setState({
      showSignUp: !this.state.showSignUp
    })
  }
  renderSignUp = () => <SignUp />

  render() {
    const { activeItem } = this.state

    return (
      <Router>
        <div>
          <Menu>
            <Menu.Item header
              name="Local Experts"
              // active={activeItem === 'Local Experts'}
              // onClick={this.handleExpertsClick}
              >
              {/* <Link to="/">Local Experts</Link> */}
              <a href="/">Local Experts</a>
            </Menu.Item>
            <Menu.Item header>
              {/* <Link to="/exp" >Experiences</Link> */}
              <a href="/exp" >Experiences</a>
            </Menu.Item>
            <Menu.Item
              // name='Log-in'
              // active={activeItem === 'Log-in'}
              // onClick={this.handleItemClick}
            >
              <a href="/checkout">Check Out</a>
            </Menu.Item>
            <Menu.Item>
              {/* onClick={this.renderSignUp}> */}
              <a href="/signup" >Sign Up</a>
              </Menu.Item>
          </Menu>
          
          {/* {this.state.showSignUp ? */}
            <Router>
              {/* <Route path="/signup" exact render={this.renderSignUp} /> */}
              <Route path="/checkout" exact render={() => <></>} />
            </Router> 
          {/* } */}
        </div>
      </Router>
    )
  }
}
