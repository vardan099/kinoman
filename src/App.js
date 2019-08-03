import React from 'react';
import {Provider} from 'react-redux'
import configureStore from './store';
import './App.scss';
import HomePage from './components/HomePage/HomePage'

function App() {
    return (
        <Provider store={configureStore()}>
            <div className="App">
                <HomePage/>
            </div>
        </Provider>
    );
}

export default App;
