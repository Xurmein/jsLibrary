import React from 'react';
import AuthForm from '../layout/Authform';

class Signup extends React.Component {
  
    handleChange = (e) => {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
    }  

    render(){
        return (
            <div>
                <AuthForm
                    formName="Signup"
                    changeInputs={ this.handleChange }
                />
                <h6>Login <button onClick={ this.props.toggleForm }>HERE</button> if you have an account</h6>
            </div>
        )
    }
}

export default Signup;