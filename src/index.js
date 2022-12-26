/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * entry of a react application
 *
 * @summary entry of a react application 
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:33:51 
 * Last modified  : 2022-12-27 01:00:31
 */

import React from "react";
import ReactDOM from "react-dom/client";
import * as RRD from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RRD.BrowserRouter>
      <App />
    </RRD.BrowserRouter>
  </React.StrictMode>
);
