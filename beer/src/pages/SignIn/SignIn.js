import React, { useState, useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart } from './../../redux/User/user.actions'
import { useHistory} from 'react-router-dom'
import Button from '../../components/Button/Button'
import './SignIn.scss'
import FormInput from '../../components/FormInput/FormInput'
import { auth } from './../../firebase/utils'
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper'


const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const SignIn = props => {
    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/')
        }
    }, [currentUser])

    const resetForm = () => {
        setLogin('');
        setPassword('');
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(signInStart({ login, password }))


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

export default SignIn
