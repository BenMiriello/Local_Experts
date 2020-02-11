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
import { Button, Header, Image, Modal } from 'semantic-ui-react'

export default class MenuBar extends Component {

  state = {
    showSignUp: false,
    open: false,
    // activeItem: 'Local Experts'
  }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSignUp = () => {
    
    this.setState({
      showSignUp: !this.state.showSignUp
    })
  }
  renderSignUp = () => <SignUp />

  handleClick = (e) => {
    console.log(e.target.innerText);
    this.setState({
      activeItem: e.target.innerText
    })
  }

  componentDidUpdate(){

  }

  render() {
    const { activeItem } = this.state

    return (
      <Router>
        <div>
          <Menu>
            <Menu.Item header
              // name="Local Experts"
              // active={activeItem === 'Local Experts'}
              // onClick={this.handleClick}
              >
              {/* <Link to="/">Local Experts</Link> */}
              <a href="/">Local Experts</a>
            </Menu.Item>
            <Menu.Item header>
              {/* <Link to="/exp" >Experiences</Link> */}
              <a href="/experiences" >Experiences</a>
            </Menu.Item>
            <Menu.Item
              // name='Log-in'
              // active={activeItem === 'Log-in'}
              // onClick={this.handleItemClick}
            >
              <a href="/checkout">Check Out</a>
            </Menu.Item>
            {
              localStorage.user ?
                <>
                  <Menu.Item>
                    {/* onClick={this.renderSignUp}> */}
                    <a href="/signup" >Sign Up</a>
                  </Menu.Item>
                  <Menu.Item>
                    {/* onClick={this.renderSignUp}> */}
                    <a href="/login" >Log-In</a>
                  </Menu.Item>
                </>
              :
                <>
                  <Menu.Item>
                    {/* onClick={this.renderSignUp}> */}
                    <a href="/profile" >Your Profile</a>
                  </Menu.Item>
                  <Menu.Item>
                    {/* onClick={this.renderSignUp}> */}
                    <a href="/logout" >Log-Out</a>
                  </Menu.Item>
                </>
            }
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