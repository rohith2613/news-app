import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer1 from './components/Footer1.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <Header />
  <App />
  <Footer1 />
  
</Router>,
)
