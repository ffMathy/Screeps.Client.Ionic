import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { registerIonic } from '@ionic/react';

import terrain from './samples/terrain1.json';
import samples from './samples/room1';

function start(_terrain, _samples) {
    ReactDOM.render(
        <App samples={_samples} terrain={_terrain} />,
        document.getElementById('root'),
    );
}

registerIonic();

start(terrain, samples);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
