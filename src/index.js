import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Contacts from './Views/Contacts';
import Home from './Views/Home';
import NotFound from './Views/NotFound';
import Header from './Components/Header';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contacts' element={<Contacts/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);
