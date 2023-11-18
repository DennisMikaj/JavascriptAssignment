import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Contacts from './Views/Contacts';
import Home from './Views/Home';
import NotFound from './Views/NotFound';
import Services from './Views/Services';
import News from './Views/News'
import ArticlesFull from './Views/ArticlesFull';
import ArticleDetails from './Views/ArticleDetails';
import { ArticleProvider } from './assets/Generics/ArticleContext';
import GoToTopButton from './assets/Generics/GoToTopButton'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <BrowserRouter>
    <GoToTopButton/>
    <ArticleProvider>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contacts' element={<Contacts/>} />
      <Route path='/news' element={<News/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/news/:articleId' exact element={<ArticleDetails/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </ArticleProvider>
    </BrowserRouter>
  
  </React.StrictMode>
);
