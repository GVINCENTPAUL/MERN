import ReactDOM from 'react-dom/client';
import React from 'react';
import Header from './component/Header';
//import Todolist from './component/Todolist';
//import Feedback from './component/Feedback';
//import Example from './Example';
//import { Context } from './Context';
import Login from './component/Login';
import Register from './component/Register';
import './Input.css';
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom';
//import Mycomponent from './Mycomponent';
const root = document.getElementById('root');//root id form index.html
const VirtualRoot=ReactDOM.createRoot(root);

//virtual dom 
VirtualRoot.render(
  <Router>
    <div>
      <h1 className='text-red-700'>Hello World</h1>
      <Header/>
    </div>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

