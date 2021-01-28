import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase';
import HeaderContainer from '../containers/header';
import Form from '../components/form';
import FooterContainer from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInValid = emailAddress === "" || password === "" || firstName === "";

    const handleSignup = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1
                })
                .then(() => {
                    history.push(ROUTES.BROWSE);
                });
            }).catch((error) => {
                setError(error.message);
                setEmailAddress('');
                setPassword('');
            });
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignup} method="POst">
                        <Form.Input 
                            placeholder="FirstName"
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value)} 
                        />
                        
                        <Form.Input 
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)} 
                        />
                        <Form.Input 
                            placeholder="Password"
                            type="password"
                            value={password}
                            autoComplete="off"
                            onChange={({target}) => setPassword(target.value)} 
                        />

                        <Form.Submit 
                            type="submit"
                            disabled={isInValid}
                        >
                            Sign up
                        </Form.Submit>

                        <Form.Text>
                            Already have an account. <Form.Link to={ROUTES.SIGN_IN}>Sign in.</Form.Link>
                        </Form.Text>

                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}