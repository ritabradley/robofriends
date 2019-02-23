import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { cats } from './cats';

ReactDOM.render(
  <div>
    <Card id={cats[0].id} name={cats[0].name} email={cats[0].email} />
    <Card id={cats[1].id} name={cats[1].name} email={cats[1].email} />
    <Card id={cats[2].id} name={cats[2].name} email={cats[2].email} />
  </div>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
