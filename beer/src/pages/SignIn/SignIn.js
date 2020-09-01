import React, { Component } from 'react'
import Button from '../../components/Button/Button'
import './SignIn.scss'
import FormInput from '../../components/FormInput/FormInput'
import { auth } from './../../firebase/utils'
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper'


const initalState = {
    login: '',
    password: '',
}

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...initalState
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { login, password } = this.state;


        try {
            await auth.signInWithEmailAndPassword(login, password);

            this.setState({ ...initalState })
        } catch (err) { console.log(err) }
    }

    render() {
        const { login, password } = this.state;
        return (
            <AuthWrapper>

                <form className="form" onSubmit={this.handleSubmit}>
                    <FormInput label="e-mail" value={login} type="email" name="login" handleChange={this.handleChange}></FormInput>
                    <FormInput label="password" value={password} type="password" name="password" handleChange={this.handleChange}></FormInput>
                    <Button type="submit">Sign In</Button>
                    <p>First time?</p>
                    <a href="/signUp">Sign Up</a>
                </form>
                </AuthWrapper>
        )
    }

}

export default SignIn
