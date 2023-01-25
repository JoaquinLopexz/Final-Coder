import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import { CardContext } from "./components/Context/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <CardContext>
    <App />
  </CardContext>
) 