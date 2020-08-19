import React, {Component} from 'react'
import Button from '../../components/Button/Button'
import './SignIn.scss'


const initalState = {
    login: '',
    password: '',
    confirmPassword: ''
}

class SignIn extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         ...initalState
    //     }
    // }

    render() {
        return (
            <section className="signIn">
                <form className="signInForm">
                    <label className="label" htmlFor="login">Login
                            <input className="input" type="text" name="login" />
                    </label>
                    <label className="label" htmlFor="password">Password
                            <input className="input" type="password" name="password" />
                    </label>
                    <Button type="submit">Sign In</Button>
                    <p>First time?</p>
                    <a href="/signUp">Sign Up</a>
                </form>
            </section>
        )
    }

}

export default SignIn
