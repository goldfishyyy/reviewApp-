import React from "react";
import App from "./App";
// for render using creatRoot
import { createRoot } from "react-dom/client";
//import global style sheet file
import './index.css';
import {BrowserRouter} from 'react-router-dom'

//grab index.html <div id=root> for container
const container = document.getElementById("root");
const root = createRoot(container);
//render component here
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
