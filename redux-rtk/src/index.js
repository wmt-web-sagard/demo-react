import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import reportWebVitals from './reportWebVitals';
import AllUserList from './Component/AllUserList';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { apiUser } from './App/apiUser';
import AddUser from './Component/AddUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={apiUser}>
    <BrowserRouter>
  
  {/* <ApiCall/> */}
  <Routes>
    <Route path='/' element={<AllUserList/>} />
    <Route path='user/:id' element={<AddUser/>} />
    <Route path='user/' element={<AddUser/>} />
  </Routes>
  </BrowserRouter>
    

    </ApiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
