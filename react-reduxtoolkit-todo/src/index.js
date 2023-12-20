import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Page from './Component/Page';
import { store } from './Component/app/store';
import TodoList from './Component/TodoList';
import AddTodo from './Component/AddTodo';
import ApiCall from './Component/ApiCall';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Page/>
    <TodoList/>
    <AddTodo/>
    <ApiCall/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
