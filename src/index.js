import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AOS from 'aos';

//CSS
import './semantic/dist/semantic.min.css';
import './App.css';
import '../node_modules/aos/dist/aos.css';

AOS.init();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
