import React from "react";
import ReactDom from "react-dom";
import App from "App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorkerRegistration from "serviceWorkerRegistration";

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
