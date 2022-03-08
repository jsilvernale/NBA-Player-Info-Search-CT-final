import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { firebaseConfig } from './firebaseConfig';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, PlayerInfo, SignIn } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'firebase/auth';
import './main.css';




ReactDOM.render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
            
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/Player_Info'>
                            <PlayerInfo></PlayerInfo>
                        </Route>
                        <Route exact path='/signin'>
                            <SignIn></SignIn>
                        </Route>
                    </Switch>
                </Router>

        </FirebaseAppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
