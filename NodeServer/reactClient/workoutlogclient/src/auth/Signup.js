import React, { Component } from 'react';
import { 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Button
} from 'reactstrap';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
            };
        }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        fetch("http://localhost:4000/api/user/createuser", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({'Content-Type':'application/json'})
            }).then(
                (response) => {
                    return response.json();
                }
            ).then((data) => {
                this.props.setToken(data.sessionToken)
                    });
            event.preventDefault();
                }

    render() {
        return (
            <div>
                <h1>Sign Up!</h1>
                <h6>register to use the workout log!</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="su_username" type="text" name="username" placeholder="choose your username" onChange={this.handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter you password" onChange={this.handleChange} required />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Signup;