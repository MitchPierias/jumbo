import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// // Components
// import Views from './App';
// import Header from './components/Header';
// import AuthProvider from './context/AuthService';
// import { APIService } from './context/APIService';
// Global Styles
import './index.css';

/**
 * Top level application structure. Context, redux and other
 * application level components should be mounted here.
 * @author Mitch Pierias <github.com/MitchPierias>
 */
const App = (
    <Router>
        <div>
            <h1>Test</h1>
        </div>
    </Router>
)

ReactDOM.render(App, document.getElementById('root'));