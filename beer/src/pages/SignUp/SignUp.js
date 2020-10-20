import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUpStart } from './../../redux/User/user.actions'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button/Button'
import FormInput from '../../components/FormInput/FormInput'
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper'
import { Link } from 'react-router-dom'


const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr

}
)
const SignUp = () => {
    const { currentUser, userErr } = useSelector(mapState)
    const history = useHistory();
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/')
        }
    }, [currentUser, history])


    const resetForm = () => {
        setLogin('');
        setPassword('');
        setConfirmPassword('');
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(signUpStart({
            login, password, confirmPassword
        }))

    }
    return (
        <AuthWrapper>

            <form className="form" onSubmit={handleSubmit}>
                <div className="errors">
                    {userErr}
                </div>
                <FormInput label="e-mail" value={login} type="email" name="login" handleChange={e => setLogin(e.target.value)}></FormInput>
                <FormInput label="password" value={password} type="password" name="password" handleChange={e => setPassword(e.target.value)} ></FormInput>
                <FormInput label="confirm password" value={confirmPassword} type="password" name="confirmPassword" handleChange={e => setConfirmPassword(e.target.value)} ></FormInput>
                <Button type="submit">Sign Up</Button>
                <p>Already registered?</p>
                <Link to="/signIn">Sign In</Link>
            </form>

        </AuthWrapper >
    )
}


export default SignUp
