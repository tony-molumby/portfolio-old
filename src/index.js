import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//CSS
import './App.css';
import './semantic/dist/semantic.min.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
