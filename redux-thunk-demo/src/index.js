import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Provider} from 'react-redux'
import { store } from './app/store';
import ApiCall from './Component/ApiCall';
import UsersData from './Component/UsersData';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import AddUser from './Component/AddUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Suspense  fallback={<>loading</>}>
  <BrowserRouter>
  
  {/* <ApiCall/> */}
  <Routes>
    <Route path='/' element={<UsersData/>} />
    <Route path='user/:id' element={<AddUser/>} />
    <Route path='user/' element={<AddUser/>} />
  </Routes>
  </BrowserRouter>
  </Suspense>
  </Provider>
);
  
