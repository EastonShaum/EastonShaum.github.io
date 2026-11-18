import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { startAnalytics } from './analytics';

startAnalytics();

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pages are pre-rendered to HTML at build time (scripts/prerender.js);
// hydrate that markup instead of replacing it. 404.html has an empty root.
if (root.hasChildNodes()) {
  ReactDOM.hydrate(app, root);
} else {
  ReactDOM.render(app, root);
}
