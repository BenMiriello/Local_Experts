import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


class SignUp extends Component {

    state = {
        Username: "",
        Password: "",
    }

    render(){
        
        return (
            <Form>
            <Form.Field>
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