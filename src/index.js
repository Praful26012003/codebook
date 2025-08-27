import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FilterContextProvider } from './context';
import { CartContextProvider } from './context';
import { ScrollToTop } from './components';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartContextProvider>
        <FilterContextProvider>
          <ScrollToTop />
          <ToastContainer closeButton={false} autoClose={3000} />
          <App />
        </FilterContextProvider>
      </CartContextProvider>
    </Router>
  </React.StrictMode>
);