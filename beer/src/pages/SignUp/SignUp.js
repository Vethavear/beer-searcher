import React, { Component } from 'react'
import Button from '../../components/Button/Button'
import FormInput from '../../components/FormInput/FormInput'
import { auth, handleUserProfile } from './../../firebase/utils'
import './SignUp.scss'

const initalState = {
    login: '',
    password: '',
    confirmPassword: '',
    errors: []

}

class SignUp extends Component {

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
        const { login, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            console.log('gowno')
            const err = ['Password don\'t match!'];
            this.setState({
                errors: err
            })
            return;

        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(login, password);
            await handleUserProfile(user);
            this.setState({...initalState})
        } catch (err) { console.log(err) }
    }
    render() {
        const { login, password, confirmPassword, errors } = this.state;
        return (


            < section className="signUp" >
                {
                    errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return (
                                    alert(err)
                                )
                            })}
                        </ul>
                    )
                }

                <form className="signUpForm" onSubmit={this.handleSubmit}>
                    <FormInput label="e-mail" type="email" name="login" onChange={this.handleChange}></FormInput>
                    <FormInput label="password" type="password" name="password" onChange={this.handleChange}></FormInput>
                    <FormInput label="password" type="password" name="confirmPassword" onChange={this.handleChange}></FormInput>
                    <Button type="submit">Sign Up</Button>
                    <p>Already registered?</p>
                    <a href="/signIn">Sign In</a>
                </form>

            </section >
        )
        // return (
        //     <section className="signUp">
        //         <form className="signUpForm">
        //             <label className="label" htmlFor="login">Login
        //                     <input className="input" type="text" name="login" />
        //             </label>
        //             <label className="label" htmlFor="password">Password
        //                     <input className="input" type="password" name="password" />
        //             </label>
        //             <label className="label" htmlFor="password2">Password
        //                     <input className="input" type="password" name="password2" />
        //             </label>
        //             <Button type="submit">Sign Up</Button>
        //             <p>Already registered?</p>
        //             <a href="/signIn">Sign In</a>
        //         </form>
        //     </section>
        // )
    }

}

export default SignUp
