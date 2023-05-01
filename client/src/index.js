import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";  //provider is used to provide the store to the app 
import { store } from "./redux/store";  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>  
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
  </Provider>
);