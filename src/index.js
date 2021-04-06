import React, {createContext} from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import {BrowserRouter} from "react-router-dom";
import firebase from "firebase";
import "firebase/firestore";

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDSGLDCFJM5zTz7sfzyIsrD5slMpzElySE",
    authDomain: "task-for-marta-barchuk.firebaseapp.com",
    projectId: "task-for-marta-barchuk",
    storageBucket: "task-for-marta-barchuk.appspot.com",
    messagingSenderId: "526970311555",
    appId: "1:526970311555:web:8138a21ec9d2603de81cb6"
});

export const Context = createContext(null)

export const firestore = firebase.firestore();


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        firestore,
    }}>
        <BrowserRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </BrowserRouter>
    </Context.Provider>,

    document.getElementById("root")
);