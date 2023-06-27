import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import'./scss/ncr.scss'; //scss컴포넌트 import
import Work from './Portfolio'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Work></Work>
    </>
);

