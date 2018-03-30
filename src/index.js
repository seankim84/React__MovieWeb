import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //ReactDom은 App.js를 render한다 (id가 root인 곳에)
registerServiceWorker();
