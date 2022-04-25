import ReactDOM from "react-dom";
import React from "react";
import Slate from './components/Slate.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import "../node_modules/normalize.css/normalize.css"
import "./style/style.scss"
import { Provider } from 'react-redux'

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from './reduxFolder/store/ConfigureStore'
import { stores } from './reduxFolder/store/ConfigureStore'

// const stores = store()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={stores}>
            <PersistGate persistor={persistor}>
                <Slate />
            </PersistGate>
        </Provider>
    </React.StrictMode>
    , document.getElementById('app'))
