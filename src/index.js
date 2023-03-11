import React from 'react';
import ReactDOM from 'react-dom/client';
//import CounterApp from './01-useState/CounterApp';
import './index.css';
//import {HooksApp} from './HooksApp';
import CounterWithCustomHook from './01-useState/CounterWithCustomHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>
);

