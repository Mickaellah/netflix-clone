import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

import dotenv from 'dotenv';

dotenv.config();

// import {seedDatabase} from './seed';

const config = {
    apiKey: 'AIzaSyA6BlVmJRgJjpy0HzYMu25-owj0JSl6jBU',
    authDomain: 'netflix-onja-clopedia.firebaseapp.com',
    projectId: 'netflix-onja-clopedia',
    storageBucket: 'netflix-onja-clopedia.appspot.com',
    messagingSenderId: '769208031154',
    appId: '1:769208031154:web:79dd8b5bf0c3031417f6ab',
}

const config = {
    apiKey: process.env.FB_api_key,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID,
}

const firebase = window.firebase.initializeApp(config);

// seedDatabase(firebase);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>, document.getElementById('root'));
