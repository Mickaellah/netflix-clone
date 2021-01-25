import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase';
import Form from '../components/form';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Signin() {
    const {firebase} = useContext(FirebaseContext);
    const history = useHistory();
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const isInValid = emailAddress === "" || password === "";

    const handleSignin = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                setEmailAddress();
                setPassword();
                setError();
                history.push(ROUTES.BROWSE);
            }).catch((error) => setError(error.message));
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign in</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method="POst">
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
                            Sign in
                        </Form.Submit>

                        <Form.Text>
                            New to Netflix?  <Form.Link to='/signup'>Sign up now.</Form.Link>
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