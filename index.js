/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux'
import configureStore from './store'
import React from 'react';

const store = configureStore();

const SampleApp = () => {
    return(<Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => SampleApp);
