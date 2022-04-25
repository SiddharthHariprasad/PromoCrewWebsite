import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput, Button, Icon, Card, Row, Col, Checkbox } from 'react-materialize';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { signup, signin } from '../../actions/auth';
import { SECRET_KEY } from '../../constants/secretKey';

const SignUp = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [userData, setUserData] = useState({
        firstName: '', lastName: '', email: '', password: '', confirmPassword: '', serviceProvider: false
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signup(userData, history));
        } else {
            dispatch(signin(userData, history));
        }
    };

    const switchMode = () => { setIsSignUp((prevIsSignUp) => !prevIsSignUp); };

    const handleShowPassword = () => { setShowPassword((prevShowPassword) => !prevShowPassword); }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', payload: { result, token }});

            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const googleFaliure = () => { alert("Google Sign In was Unsuccessful. Try Again Later"); };

    return (
        <div id="main-content" className="authPage container" style={{ maxWidth: '50%' }}>
            <Card className="white z-depth-3" textClassName="teal-text">
                <h4><Icon>lock</Icon><br />{isSignUp?"Sign Up":"Sign In"}</h4>
                <span id="accountNoneExistent" className="red-text" hidden>Username or Password doesn't macth or Account Doesn't Exist!</span>
                <span id="passwordMisMatch" className="red-text" hidden>Passwords Doesn't Match!</span>
                <span id="accountExists" className="red-text" hidden>Account Already Exists!</span>
                <span id="detailsMissing" className="red-text" hidden>All detials are required!</span>
                <form autoComplete="off" noValidate className="container" onSubmit={handleSubmit}>
                    {isSignUp && (
                        <>
                            <Row>
                                <Col s={12} m={6}>
                                    <TextInput id="firstName" name="firstName" label="First Name" placeholder="Enter First Name" validate onChange={handleChange} />
                                </Col>
                                <Col s={12} m={6}>
                                    <TextInput id="lastName" name="lastName" label="Last Name" placeholder="Enter Last Name" validate onChange={handleChange} />
                                </Col>
                            </Row>
                        </>
                    )}
                    <TextInput id="email" name="email" label="Email" placeholder="Enter Email ID" validate error="Please enter a valid email" email onChange={handleChange} />
                    <TextInput id="password" name="password" label="Password" placeholder="Enter Password" validate type={showPassword?'text':'password'} onChange={handleChange} />
                    {isSignUp && (
                        <>
                            <TextInput id="confirmPassword" name="confirmPassword" label="Confirm Password" placeholder="Enter Password Again" validate type={showPassword?'text':'password'} onChange={handleChange} />
                            <Checkbox id="isServiceProvider" name="isServiceProvider" label="I am a service provider" value="true" onChange={(e)=> e.target.checked ? document.getElementById('serviceProviderSecretKey').removeAttribute('hidden'): document.getElementById('serviceProviderSecretKey').setAttribute('hidden', "")} />
                            <TextInput id="serviceProviderSecretKey" name="serviceProvider" placeholder="Enter Secret Key" hidden type={showPassword?'text':'password'} onChange={(e) => {if(e.target.value===SECRET_KEY) {document.getElementById('secretKeyError').setAttribute('hidden', ""); setUserData({ ...userData, serviceProvider: true });} else {document.getElementById('secretKeyError').removeAttribute('hidden')}}} />
                            <span id="secretKeyError" className="red-text" hidden>Invalid Secret Key</span>
                        </>
                    )}
                    <Button flat type="" node="a" waves="light" onClick={handleShowPassword}><Icon>{showPassword?'visibility_off':'visibility'}</Icon> {showPassword?'Don\'t Show Password':'Show Password'}</Button><br /><br />
                    <Button node="button" type="submit" waves="light">{isSignUp?'Sign Up':'Login In'}<Icon right>lock_open</Icon></Button><br /><br />
                    <GoogleLogin 
                        clientId="680608765715-uldh3318kluuoe5spcpp38bn781dt9fq.apps.googleusercontent.com"
                        render={(renderProps) => (<Button node="button" waves="teal" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign In with Google</Button>)}
                        onSuccess={googleSuccess}
                        // onFailure={googleFaliure}
                        cookiePolicy="single_host_origin"
                    /><br />
                    <Button flat type="" node="a" waves="light" onClick={switchMode}>{isSignUp?'Already have an Account? Sign In':'Don\'t have an Account? Sign Up'}</Button>
                </form>
                <br />
            </Card>
        </div>
    );
}

export default SignUp;