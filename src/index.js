import {h, render} from 'preact';
import App from './App';

const root = document.getElementById('root');
render(
  <div>
    <App />
  </div>,
  root,
  root.firstChild
);
