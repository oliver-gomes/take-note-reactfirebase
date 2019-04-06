import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

// Initialize Firebase
import config from "./firebase";

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
