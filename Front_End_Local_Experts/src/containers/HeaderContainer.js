import React, { Component } from 'react'
import MenuBar from '../components/MenuBar'
import TestMenu from '../components/testmenu'

export default class HeaderContainer extends Component {
    render() {
        return (
            <div>
                <MenuBar />
                {/* <TestMenu /> */}
            </div>
        )
    }
}
