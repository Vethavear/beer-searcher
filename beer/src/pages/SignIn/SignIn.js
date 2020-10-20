import React, { useState, useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart } from './../../redux/User/user.actions'
import { useHistory } from 'react-router-dom'
import {getFavsStart } from './../../redux/Beers/beer.actions'
import Button from '../../components/Button/Button'
import FormInput from '../../components/FormInput/FormInput'
import {Link} from 'react-router-dom'
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper'


const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr

})

const SignIn = () => {
    const { currentUser, userErr } = useSelector(mapState);
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/');
            dispatch(getFavsStart());
        }
    }, [currentUser, history, dispatch])

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
            <div className="errors">
                    {userErr}
                </div>
                <FormInput label="e-mail" value={login} type="email" name="login" handleChange={e => setLogin(e.target.value)}></FormInput>
                <FormInput label="password" value={password} type="password" name="password" handleChange={e => setPassword(e.target.value)}></FormInput>
                <Button type="submit">Sign In</Button>
                <p>First time?</p>
                <Link to="/signUp">Sign Up</Link>
            </form>
        </AuthWrapper>
    )

}

export default SignIn
