import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
/*import {createStore} from "redux";
import {devToolsEnhancer} from "@reduxjs/toolkit/src/devtoolsExtension";
import {Provider} from "react-redux";*/


/*
const store = createStore(rootReducer,
    devToolsEnhancer() //리덕스 devTool 적용
    /!*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() *!/  ); //store 생성
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <BrowserRouter>
            <App/>
        </BrowserRouter>

);
