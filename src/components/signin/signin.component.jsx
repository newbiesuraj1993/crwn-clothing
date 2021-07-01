import React from 'react'
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../firebase/firebase.util';
import CustomButton from '../custom-button/custom-button.component';
import './signin.styles.scss'


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event => {

        //here name can be email or password. so whatever comes as name , that key is picked up and the value passed from interface is passed as the value
        const {value, name} = event.target;

        this.setState({ [name] : value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email id and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' label='Email' type='email' value = {this.state.email} handleChange={this.handleChange} required />
                
                    <FormInput name='password' label ='Password' type='password' value = {this.state.password} handleChange={this.handleChange}  required />
                    <div className='buttons'>
                        <CustomButton type='submit' value = 'Submit Form' >Sign In</CustomButton> 
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>
                   
                </form>
            </div>
        )
    }
}


export default SignIn