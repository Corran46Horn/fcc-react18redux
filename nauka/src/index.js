import React from 'react';
import ReactDOM from 'react-dom/client';

import Greeting from './components/Greeting/Greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <ul>
      <li>
        <Greeting></Greeting>
        <Greeting></Greeting>
        <Greeting></Greeting>
        <Greeting></Greeting>
        <Greeting></Greeting>
        <Greeting></Greeting>
        <Greeting></Greeting>
        <Greeting></Greeting>
      </li>
    </ul>
  </>
);
