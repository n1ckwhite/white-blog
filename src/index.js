import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from "./components/App/App";
import {Provider} from 'react-redux'
import { store } from "./service/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>
  </BrowserRouter>
  </>
);

reportWebVitals();
