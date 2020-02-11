import React, {Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'


class SignUp extends Component {

    state = {
        name: "",
        password: "",
    }

    handleSubmit= (e) => {
        console.log('user from signup state:' , this.state);
        e.preventDefault()
        const newUser = this.state
        axios.post('http://localhost:4001/api/v1/users', newUser)
        .then(res => {
            const userCurrent = res.data
            localStorage.setItem('User', userCurrent.username)
        })
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        
        return (
            <Form onSubmit={this.handleSubmit}>
            <Form.Field>
                <label>Name</label>
                <input name="name" onChange={this.handleChange} value={this.state.name}  placeholder='Username' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input name="password" onChange={this.handleChange} value={this.state.password} placeholder='assword' />
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

