import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUpUser } from './../../redux/User/user.actions'
import { withRouter } from 'react-router-dom'
import Button from '../../components/Button/Button'
import FormInput from '../../components/FormInput/FormInput'
import './SignUp.scss'
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper'

const mapState = ({ user }) => ({
    signUpSuccess: user.signUpSuccess,
    singUpError: user.signUpError

}
)
const SignUp = props => {
    const { signUpSuccess, signUpError } = useSelector(mapState)
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (signUpSuccess) {
            resetForm();
            props.history.push('/')
        }
    }, [signUpSuccess])

    useEffect(() => {
        if (Array.isArray(signUpError) && signUpError.length > 0) {
            setErrors(signUpError)
        }
    }, [signUpError])

    const resetForm = () => {
        setLogin('');
        setPassword('');
        setConfirmPassword('');
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(signUpUser({
            login, password, confirmPassword
        }))

    }
    return (
        <AuthWrapper>
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

            <form className="form" onSubmit={handleSubmit}>
                <FormInput label="e-mail" value={login} type="email" name="login" handleChange={e => setLogin(e.target.value)}></FormInput>
                <FormInput label="password" value={password} type="password" name="password" handleChange={e => setPassword(e.target.value)} ></FormInput>
                <FormInput label="password" value={confirmPassword} type="password" name="confirmPassword" handleChange={e => setConfirmPassword(e.target.value)} ></FormInput>
                <Button type="submit">Sign Up</Button>
                <p>Already registered?</p>
                <a href="/signIn">Sign In</a>
            </form>

        </AuthWrapper >
    )
}


export default withRouter(SignUp)
