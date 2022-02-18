import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CategoriesProvider } from './contexts/RecipeContext'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

