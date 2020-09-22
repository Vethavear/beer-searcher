import React, { useState, useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInUser } from './../../redux/User/user.actions'
import { withRouter } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './SignIn.scss'
import FormInput from '../../components/FormInput/FormInput'
import { auth } from './../../firebase/utils'
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper'


const mapState = ({ user }) => ({
    signInSuccess: user.signInSuccess
})

const SignIn = props => {
    const { signInSuccess } = useSelector(mapState);
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (signInSuccess) {
            resetForm();
            props.history.push('/')
        }
    }, [signInSuccess])

    const resetForm = () => {
        setLogin('');
        setPassword('');
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(signInUser({ login, password }))


    }

    return (
        <AuthWrapper>

            <form className="form" onSubmit={handleSubmit}>
                <FormInput label="e-mail" value={login} type="email" name="login" handleChange={e => setLogin(e.target.value)}></FormInput>
                <FormInput label="password" value={password} type="password" name="password" handleChange={e => setPassword(e.target.value)}></FormInput>
                <Button type="submit">Sign In</Button>
                <p>First time?</p>
                <a href="/signUp">Sign Up</a>
            </form>
        </AuthWrapper>
    )

}

export default withRouter(SignIn)
