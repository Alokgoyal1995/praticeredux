import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// we need the global storage so we import createstorage and it is allows for create store
import reducer from './store/Reducer';
// provider is allowe us to inject the globallist store so we wrap entire app with provider so what we pass it is globally
const store = createStore(reducer);
// here is create the store bcoz createstore is allowed...and here pass the reducer that we export 

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// here is pass the storege to the provider so we can say store is equal to all storage
// now the storgage is available for the entire application
serviceWorker.unregister();
