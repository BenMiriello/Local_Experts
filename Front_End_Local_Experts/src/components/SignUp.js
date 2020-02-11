import React, {Component} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'


class SignUp extends Component {

    state = {
        Username: "",
        Password: "",
    }

    submitUser = (e) => {
        e.preventDefault()
        const newUser = this.state
        axios.post("http://localhost:4001/api/v1/users", newUser) 
        .then(res => {
           const currentUser = res.data
           localStorage.setItem("User",currentUser.Username)
        }, console.log(localStorage))
        
    }
    

    render(){
        
        return (
            <Form onSubmit={this.submitUser}>
            <Form.Field >
                <label>Username</label>
                <input placeholder='Username' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>

        )
    }
}

export default SignUp