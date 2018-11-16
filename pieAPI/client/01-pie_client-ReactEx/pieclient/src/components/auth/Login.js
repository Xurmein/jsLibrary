import React from 'react';
import AuthForm from '../layout/Authform';

class Login extends React.Component {
  
    handleChange = (e) => {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value // 2-way binding
        })
    }  

    render(){
        return (
            <div>
                <AuthForm
                    formName="Login"
                    changeInputs={ this.handleChange }
                />
                <h6>Register <button onClick={ this.props.toggleForm }>HERE</button> if you DO NOT have an account</h6>
            </div>
        )
    }
}

export default Login