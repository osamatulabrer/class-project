
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router";
import { Provider } from 'react-redux';
import store from './app/Store.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <Router>
  <Provider store={store}>

    <App />
    <ToastContainer />
  </Provider>
  </Router>
)
