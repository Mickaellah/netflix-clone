import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: 'AIzaSyA6BlVmJRgJjpy0HzYMu25-owj0JSl6jBU',
    authDomain: 'netflix-onja-clopedia.firebaseapp.com',
    databaseUrl: 'https://netflix-onja-clopedia.firebaseapp.com',
    projectId: 'netflix-onja-clopedia',
    storageBucket: 'netflix-onja-clopedia.appspot.com',
    messagingSenderId: '769208031154',
    appId: '1:769208031154:web:79dd8b5bf0c3031417f6ab',
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>, document.getElementById('root'));
