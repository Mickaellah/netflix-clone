import React from 'react';
import FaqsContainer from '../containers/faqs';
import JumbotronContainer from '../containers/jumbotron';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import {OptForm, Feature} from '../components';

export default function home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, Tv programmes and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere, cancel anytime.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email Adress" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership.
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
