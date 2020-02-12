import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import SignUp from './SignUp'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import axios from 'axios'

export default class MenuBar extends Component {

  state = {
    showSignUp: false,
    open: false,
    activeItemLE: 'Local Experts',
    activeItemHome: 'home',
    // openModal: false,
    username: "",
    password: "",
    isLogInActive: false
  }

  


  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  handleOrderClick = (e, { name }) => this.setState({ activeItem: name })


  onChangeHandler = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }
//  get
//
//
//
//
//

  logInHandler = (event) => {
    event.preventDefault()
    console.log(this.state)
    const loginInfo = {
      name: this.state.username,
      password: this.state.password
    }
    axios.post('http://localhost:4001/api/v1/users/login',loginInfo)
    .then(console.log)
      // .then(res => {
      //  const allUsers = res.data
      //  const {username, password} = this.state
      //  const loggedUser = allUsers.find(users => users.name === username)
      //  if loggedUser && logged
       



      // })

    // fetch(`http://localhost:3000/users`)
    //   .then(res => res.json())
    //   .then(allUsers => {
    //     // console.log(allUsers)
    //   this.setState =  allUsers.find(function(user) {return user.username && user.password == this.state.username && this.state.password} )
    // })
  }
  logOutHandler = () => {
    localStorage.clear();
    window.location.reload(true)
  }

  noUserMenu = () => {
    const { activeItemHome, activeItemLE, open, dimmer, username, password } = this.state
    return(
      <>
        <Menu.Item>
          {/* onClick={this.renderSignUp}> */}
          <a href="/signup" >Sign Up</a>
        </Menu.Item>
        <Menu.Item>
        <Button onClick={this.show('blurring')}>LogIn</Button>
          <Modal dimmer={dimmer} open={open} onClose={this.close}>
              <Modal.Header>Please Log In Here</Modal.Header>
              <Modal.Content image>
                <Image
                  wrapped
                  size='medium'
                  
                />
                <Modal.Description>
                  <Header>Enter Log-In</Header>
                  <form onSubmit= {this.logInHandler}>
                      <ul>
                          <li>
                              <label htmlFor="username"> Username:</label>
                              <input type="text"
                                    name="username"
                                    placeholder="Type username here"
                                    value={username}
                                    onChange= {this.onChangeHandler} 
                                      />
                          </li>
                          
                          <li>
                              <label htmlFor="password"> Password:</label>
                              <input type="password"
                                    name="password" 
                                    placeholder="Type password here"
                                    value={password}
                                    onChange= {this.onChangeHandler} 
                                      />
                          </li>
                          <li>
                              <button type="submit"> Submit </button>
                          </li>
                      </ul>
                  </form>
                  
                </Modal.Description>
              </Modal.Content>
            </Modal>
        </Menu.Item>
      </>
    )
  }

  activeUserMenu = () => {
    return(
      <>
        <Menu.Item>
          {/* onClick={this.renderSignUp}> */}
          <NavLink to="/profile" >Your Profile</NavLink>
        </Menu.Item>
        <Menu.Item onClick={this.logOutHandler} >
          {/* onClick={this.renderSignUp}> */}
          <div>Log-Out</div>
        </Menu.Item>
      </>
    )
  }


  handleSignUp = () => {
    
    this.setState({
      showSignUp: !this.state.showSignUp
    })
  }
  renderSignUp = () => <SignUp />

  handleClick = (e) => {
    // console.log(e.target.innerText);
    this.setState({
      activeItem: e.target.innerText
    })
  }


  render() {
    const { activeItemHome, activeItemLE, open, dimmer, username, password } = this.state

    return (

        <div>
          <Menu>
            <Menu.Item header
              onClick={this.handleClick}
              >
              <NavLink to="/">Local Experts</NavLink>
            </Menu.Item>
            <Menu.Item header
              onClick={this.handleClick}
            >
              <NavLink to="/experiences" >Experiences</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/checkout">Cart</NavLink>
            </Menu.Item>
            { 
              localStorage.user ?
                this.activeUserMenu()
              :
                this.noUserMenu()
            }
          </Menu>
          
          {/* {this.state.showSignUp ? */}
            {/* <Router> */}
              {/* <Route path="/signup" exact render={this.renderSignUp} /> */}
              <Route path="/checkout" exact render={() => <></>} />


        </div>

    )
  }
}

// import React, { Component } from 'react'
// import { Button, Header, Image, Modal } from 'semantic-ui-react'

// class ModalExampleDimmer extends Component {
//   state = { open: false }

//   show = (dimmer) => () => this.setState({ dimmer, open: true })
//   close = () => this.setState({ open: false })

//   render() {
//     const { open, dimmer } = this.state

//     return (
//       <div>
//         <Button onClick={this.show(true)}>Default</Button>
//         <Button onClick={this.show('inverted')}>Inverted</Button>
//         <Button onClick={this.show('blurring')}>Blurring</Button>

//         <Modal dimmer={dimmer} open={open} onClose={this.close}>
//           <Modal.Header>Select a Photo</Modal.Header>
//           <Modal.Content image>
//             <Image
//               wrapped
//               size='medium'
//               src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
//             />
//             <Modal.Description>
//               <Header>Default Profile Image</Header>
//               <p>
//                 We've found the following gravatar image associated with your
//                 e-mail address.
//               </p>
//               <p>Is it okay to use this photo?</p>
//             </Modal.Description>
//           </Modal.Content>
//           <Modal.Actions>
//             <Button color='black' onClick={this.close}>
//               Nope
//             </Button>
//             <Button
//               positive
//               icon='checkmark'
//               labelPosition='right'
//               content="Yep, that's me"
//               onClick={this.close}
//             />
//           </Modal.Actions>
//         </Modal>
//       </div>
//     )
//   }
// }

// export default ModalExampleDimmer

