import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSignUp = () => {
    
  }
  

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>Local Experts</Menu.Item>
        <Menu.Item
          name='aboutUs'
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Help'
          active={activeItem === 'Help'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Sign-Up'
          active={activeItem === 'Sign-Up'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Log-in'
          active={activeItem === 'Log-in'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
